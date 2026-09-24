(function () {
  'use strict';
  var A = window.ASH || { prices: {}, site: {} };
  var P = A.prices;
  var gbp = function (n) { return '£' + Number(n).toLocaleString('en-GB'); };
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  // ---------- Conversion tracking ----------
  // Sends GA4 events when analytics is configured; always records to dataLayer.
  function track(name, params) {
    params = params || {};
    params.page_path = location.pathname;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params));
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.indexOf('https://wa.me/') === 0) {
      // Add which page the visitor was on to the pre-filled message.
      var ctx = a.getAttribute('data-wa-context') || document.title.split(' | ')[0];
      if (ctx) a.href = href.split('?')[0] + '?text=' + encodeURIComponent('Hi Ashbridge Design, I\'m getting in touch from your website (' + ctx + ').');
      track('whatsapp_click', { link_location: a.className || 'link' });
    }
    else if (href.indexOf('tel:') === 0) track('phone_click');
    else if (href.indexOf('mailto:') === 0) track('email_click');
    else if (A.site.depositLink && href === A.site.depositLink) track('deposit_click');
  });

  // ---------- Mobile menu ----------
  var toggle = $('.menu-toggle'), nav = $('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- Postcode helpers ----------
  // Outward-code areas the Birmingham-based lead engineer covers in person.
  var IN_PERSON = ['B', 'CV', 'WV', 'WS', 'DY', 'WR', 'ST', 'TF', 'SY', 'HR', 'LE', 'DE', 'NG', 'NN'];
  var REMOTE = ['TR', 'CA', 'TD'];
  var NOT_ENGLAND = ['AB', 'DD', 'DG', 'EH', 'FK', 'G', 'HS', 'IV', 'KA', 'KW', 'KY', 'ML', 'PA', 'PH', 'ZE', 'CF', 'SA', 'NP', 'LL', 'LD', 'BT', 'IM', 'JE', 'GY'];
  function postcodeArea(pc) {
    var m = String(pc || '').toUpperCase().replace(/\s+/g, '').match(/^([A-Z]{1,2})\d/);
    return m ? m[1] : '';
  }
  function coverage(pc) {
    var area = postcodeArea(pc);
    if (!area) return { known: false };
    if (NOT_ENGLAND.indexOf(area) > -1) return { known: true, outside: true, area: area };
    if (area === 'OX' && /^OX1[5-7]/.test(pc.toUpperCase().replace(/\s+/g, ''))) return { known: true, inPerson: true, area: area };
    return { known: true, inPerson: IN_PERSON.indexOf(area) > -1, remote: REMOTE.indexOf(area) > -1, area: area };
  }

  function bookHref(service, detail, amount) {
    var q = '?service=' + encodeURIComponent(service) + (detail ? '&detail=' + encodeURIComponent(detail) : '');
    return '/contact/' + q;
  }

  // ---------- Instant snagging quote ----------
  $$('[data-tool="snag-quote"]').forEach(function (tool) {
    var out = $('.result', tool);
    function calc() {
      var beds = $('[name="beds"]', tool).value;
      var type = ($('[name="type"]:checked', tool) || {}).value || 'snag';
      var pc = $('[name="postcode"]', tool).value.trim();
      var row = P.snag.filter(function (r) { return r.beds === beds; })[0];
      if (!row) {
        out.innerHTML = '<p class="verdict warn">Six bedrooms or more?</p><p>Larger homes are quoted individually. Send the details and you\'ll have a fixed price the same day.</p><div class="btn-row"><a class="btn btn-amber" href="' + bookHref('New-build snagging', '6+ bedrooms') + '">Get a fixed price</a></div>';
        return;
      }
      var cov = coverage(pc);
      if (cov.outside) {
        out.innerHTML = '<p class="verdict no">Outside our coverage</p><p>Ashbridge inspects homes in England only. Postcodes starting ' + cov.area + ' are outside England.</p>';
        return;
      }
      var labels = { snag: 'Snagging survey', pci: 'Pre-completion inspection', both: 'Pre-completion + snagging', warranty: '2-year warranty inspection', reinspect: 'Re-inspection' };
      var price = row.price;
      if (type === 'both') price = row.price + P.preAndPost;
      if (type === 'warranty') price = P.warranty;
      if (type === 'reinspect') price = P.reinspection;
      var travel = cov.remote ? P.travel : 0;
      var total = price + travel;
      var who = !cov.known ? 'Add your postcode to see who will inspect.' :
        cov.inPerson ? 'Inspected in person by our Birmingham-based lead engineer.' :
        'Inspected by a qualified inspector who is a member of a recognised professional body for surveying, with every report checked by our lead engineer before you receive it.';
      var detail = labels[type] + ', ' + row.label + (pc ? ', ' + pc.toUpperCase() : '');
      var payHref = A.site.depositLink ? A.site.depositLink : bookHref('New-build snagging', detail + ', quoted ' + gbp(total));
      out.innerHTML =
        '<p class="small muted">' + labels[type] + ' · ' + row.label + '</p>' +
        '<p class="big">' + gbp(total) + '</p>' +
        '<p class="small">Fixed price' + (travel ? ', including ' + gbp(travel) + ' travel for remote areas' : '') + '. Pay a ' + gbp(P.deposit) + ' deposit to book, and the balance when your report arrives.</p>' +
        '<p class="small"><strong>' + who + '</strong></p>' +
        '<div class="btn-row"><a class="btn btn-amber" href="' + payHref + '">Book this inspection</a><a class="btn btn-ghost" href="/sample-snagging-report/">See a sample report</a></div>';
    }
    tool.addEventListener('input', calc);
    tool.addEventListener('change', calc);
    calc();
  });

  // ---------- Design fee quote ----------
  $$('[data-tool="design-quote"]').forEach(function (tool) {
    var out = $('.result', tool);
    function calc() {
      var id = $('[name="project"]', tool).value;
      var stage = ($('[name="stage"]:checked', tool) || {}).value || 'both';
      if (id === 'beam') {
        out.innerHTML = '<p class="small muted">Structural calculations · wall removal or single steel beam</p><p class="big">' + gbp(P.beamCalc) + '</p><p class="small">Calculations and beam specification for building control, done in-house by our engineer. Fixed price.</p><div class="btn-row"><a class="btn btn-amber" href="' + bookHref('Structural calculations', 'Wall removal / steel beam') + '">Request calculations</a></div>';
        return;
      }
      var p = P.design.filter(function (d) { return d.id === id; })[0];
      var map = {
        s1: ['Stage 1 · Planning drawings', p.s1, 'Measured survey, existing drawings, design options, planning drawings, submission and management of the application.'],
        s2: ['Stage 2 · Building regs drawings', p.s2, 'Technical plans, elevations, construction details and specification, and building control liaison.'],
        both: ['Stages 1 + 2 · Planning and building regs', p.both, 'Everything in both stages, plus a free planning resubmission if needed and a free location/site plan. Saves ' + gbp(p.s1 + p.s2 - p.both) + '.'],
        complete: ['Complete · Planning, building regs and structural calcs', p.complete, 'Both stages plus in-house structural calculations, so there is no third-party engineer to wait for.']
      };
      var m = map[stage];
      out.innerHTML = '<p class="small muted">' + p.name + ' · ' + m[0] + '</p><p class="big">from ' + gbp(m[1]) + '</p><p class="small">' + m[2] + ' Council and building control fees are paid separately.</p><div class="btn-row"><a class="btn btn-amber" href="' + bookHref('Extension design', p.name + ', ' + m[0] + ', from ' + gbp(m[1])) + '">Get my fixed price</a></div>';
    }
    tool.addEventListener('input', calc);
    tool.addEventListener('change', calc);
    calc();
  });

  // ---------- Pre-completion inspection window ----------
  // NHQB Code V2: inspect after the Notice to Complete is served and before completion
  // (earlier by agreement); the notice period is normally at least 14 calendar days.
  $$('[data-tool="pci-window"]').forEach(function (tool) {
    var out = $('.result', tool);
    var input = $('[name="ntc"]', tool);
    function fmt(d) { return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); }
    function calc() {
      if (!input.value) {
        out.innerHTML = '<p class="small muted">Enter the date your Notice to Complete was served to see your inspection window.</p>';
        return;
      }
      var ntc = new Date(input.value + 'T12:00:00');
      var earliest = new Date(ntc); earliest.setDate(earliest.getDate() + 14);
      out.innerHTML =
        '<p class="small muted">Your inspection window</p>' +
        '<p class="big" style="font-size:clamp(1.3rem,3.6vw,1.8rem)">From ' + fmt(ntc) + '<br>until completion</p>' +
        '<p class="small">Under Code V2, the inspection takes place after the Notice to Complete is served and before the completion date, or earlier if you and the developer both agree. The notice period is normally at least 14 calendar days, so completion is unlikely before <strong>' + fmt(earliest) + '</strong> unless you have agreed otherwise. <strong>Your contract sets the real date</strong>, so check it with your conveyancer.</p>' +
        '<p class="small">Book as early in the window as you can, so the developer has time to put things right before you complete.</p>' +
        '<div class="btn-row"><a class="btn btn-amber" href="' + bookHref('Pre-completion inspection', 'Notice to Complete served ' + input.value) + '">Book my inspection</a></div>';
    }
    input.addEventListener('input', calc);
    calc();
  });

  // ---------- Can I extend? ----------
  $$('[data-tool="can-extend"]').forEach(function (tool) {
    var out = $('.result', tool);
    function val(n) { var el = $('[name="' + n + '"]:checked', tool) || $('[name="' + n + '"]', tool); return el ? el.value : ''; }
    function render(kind, title, body, next) {
      out.innerHTML = '<p class="verdict ' + kind + '">' + title + '</p>' + body +
        '<div class="btn-row"><a class="btn btn-amber" href="' + bookHref('Extension design', 'Feasibility: ' + title) + '">' + (next || 'Ask our engineer') + '</a></div>' +
        '<p class="small muted">This is a first guide based on the permitted development rules for houses in England, not formal planning advice. A Lawful Development Certificate gives legal certainty.</p>';
    }
    function calc() {
      var home = val('home'), ext = val('ext'), area = val('area'), nb = val('newbuild');
      var depth = parseFloat(val('depth')) || 0;
      var detached = home === 'detached';
      if (home === 'flat') return render('no', 'Planning permission needed', '<p>Flats and maisonettes don\'t have householder permitted development rights, so almost any extension needs a planning application.</p>', 'Get planning drawings');
      if (area === 'listed') return render('no', 'Planning and listed building consent needed', '<p>Works to a listed building need listed building consent, and extensions need planning permission.</p>', 'Talk to our engineer');
      var designated = area === 'conservation';
      var caveat = nb === 'yes' ? '<p class="note-box">On newer estates, permitted development rights are often removed by a condition on the original planning permission. Check your property\'s planning history before relying on this. We check it as part of every quote.</p>' : '';
      if (ext === 'rear1') {
        var limit = detached ? 4 : 3, big = detached ? 8 : 6;
        if (depth <= limit) return render('ok', 'Likely permitted development', '<p>A single-storey rear extension up to ' + limit + ' m deep on a ' + (detached ? 'detached' : 'semi-detached or terraced') + ' house is usually permitted development, subject to the height, eaves and garden-coverage limits.</p>' + caveat, 'Get drawings and a Lawful Development Certificate');
        if (depth <= big && !designated) return render('warn', 'Possible under prior approval', '<p>Between ' + limit + ' m and ' + big + ' m you can use the larger home extension prior approval route: neighbours are notified and the council decides within 42 days.</p>' + caveat, 'Get prior approval drawings');
        return render('no', 'Planning permission likely needed', '<p>At ' + depth + ' m deep' + (designated ? ' in a conservation area' : '') + ', this goes beyond permitted development limits, so a householder planning application is the route.</p>' + caveat, 'Get planning drawings from £' + P.design[0].s1);
      }
      if (ext === 'rear2') {
        if (designated) return render('no', 'Planning permission needed', '<p>Two-storey rear extensions are not permitted development in conservation areas.</p>', 'Get planning drawings from £' + P.design[1].s1);
        if (depth <= 3) return render('warn', 'Possibly permitted development', '<p>A two-storey rear extension can be permitted development up to 3 m deep, but only if it is at least 7 m from the rear boundary and matches the existing materials. Many don\'t meet the 7 m rule, so check before you rely on it.</p>' + caveat, 'Check it with our engineer');
        return render('no', 'Planning permission likely needed', '<p>Two-storey rear extensions deeper than 3 m need planning permission.</p>' + caveat, 'Get planning drawings from £' + P.design[1].s1);
      }
      if (ext === 'side') {
        if (designated) return render('no', 'Planning permission needed', '<p>Side extensions are not permitted development in conservation areas.</p>', 'Get planning drawings');
        return render('warn', 'Possibly permitted development', '<p>A single-storey side extension can be permitted development if it is no more than 4 m high and no wider than half the width of the original house. Two-storey side extensions and wraparounds need planning permission.</p>' + caveat, 'Check it with our engineer');
      }
      if (ext === 'loft') {
        if (designated) return render('no', 'Planning permission likely needed', '<p>Roof extensions such as dormers are not permitted development in conservation areas. Rooflights may still be possible.</p>', 'Get loft drawings');
        return render('ok', 'Likely permitted development', '<p>Loft dormers are usually permitted development within ' + (home === 'terraced' ? '40' : '50') + ' m³ of extra volume, as long as they don\'t face the road and use similar materials. Building regulations always apply.</p>' + caveat, 'Get loft conversion drawings');
      }
      if (ext === 'garage') {
        return render(nb === 'yes' ? 'warn' : 'ok', nb === 'yes' ? 'Check your planning conditions' : 'Often no planning needed', '<p>Converting an integral or attached garage is often permitted development when the only external change is swapping the door for a window. Building regulations approval is always needed.</p>' + caveat, 'Get garage conversion drawings');
      }
    }
    tool.addEventListener('input', calc);
    tool.addEventListener('change', calc);
    calc();
  });

  // ---------- Enquiry form ----------
  $$('form[data-form]').forEach(function (form) {
    var params = new URLSearchParams(location.search);
    var svc = params.get('service'), detail = params.get('detail');
    if (svc && form.service) {
      Array.prototype.forEach.call(form.service.options, function (o) { if (o.value === svc) form.service.value = svc; });
    }
    if (detail && form.message && !form.message.value) form.message.value = 'I\'m interested in: ' + detail + '\n\n';
    var status = $('.form-status', form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = $('button[type="submit"]', form);
      btn.disabled = true; status.className = 'form-status'; status.textContent = 'Sending…';
      fetch(form.getAttribute('action') || '/api/enquiry/', { method: 'POST', body: new FormData(form) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); track('generate_lead', { service: form.service ? form.service.value : '' }); setTimeout(function () { location.href = '/thank-you/'; }, 150); })
        .catch(function () {
          btn.disabled = false; status.className = 'form-status err';
          status.textContent = 'That didn\'t send. Please try again' + (A.site.email ? ', or email ' + A.site.email + ' directly.' : A.site.whatsappDisplay ? ', or message us on WhatsApp on ' + A.site.whatsappDisplay + '.' : '.');
        });
    });
  });
})();
