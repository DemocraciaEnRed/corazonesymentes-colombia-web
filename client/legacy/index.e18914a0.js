import { i as identity, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as element, t as text, h as claim_element, j as children, k as claim_text, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, q as listen_dev, r as noop, u as space, w as claim_space, x as _slicedToArray, y as add_render_callback, z as create_bidirectional_transition, A as _createClass, B as set_data_dev, C as validate_each_argument, D as create_component, E as claim_component, F as mount_component, G as transition_in, H as transition_out, I as destroy_component, J as set_style, K as group_outros, L as check_outros, M as destroy_each, N as onMount, O as _typeof, P as assign, Q as get_spread_update, R as get_spread_object, T as run_all, U as createCommonjsModule, V as commonjsGlobal, W as getDefaultExportFromCjs, X as create_slot, Y as createEventDispatcher, Z as update_slot, $ as null_to_empty, a0 as binding_callbacks, a1 as svg_element, a2 as query_selector_all } from './client.9ec9ee2b.js';

function fade(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
      _ref2$easing = _ref2.easing,
      easing = _ref2$easing === void 0 ? identity : _ref2$easing;

  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return "opacity: ".concat(t * o);
    }
  };
}

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$i = "src/components/Todaladata.svelte"; // (51:2) {#if !showAll}

function create_if_block$2(ctx) {
  var div;
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      button = element("button");
      t = text("Ver mas >>");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", {
        id: true,
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Ver mas >>");
      button_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "id", "show-all-tik");
      attr_dev(button, "class", "border border-gray-800 border-solid svelte-7zbrrr");
      add_location(button, file$i, 52, 3, 1568);
      attr_dev(div, "class", "text-center");
      add_location(div, file$i, 51, 2, 1539);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, button);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(51:2) {#if !showAll}",
    ctx: ctx
  });
  return block;
}

function create_fragment$i(ctx) {
  var div5;
  var article;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var t1;
  var span;
  var t2;
  var t3;
  var t4;
  var div1;
  var h2;
  var t5;
  var t6;
  var p;
  var t7;
  var t8;
  var div3;
  var blockquote0;
  var section0;
  var t9;
  var blockquote1;
  var section1;
  var t10;
  var blockquote2;
  var section2;
  var t11;
  var t12;
  var div4;
  var blockquote3;
  var section3;
  var t13;
  var blockquote4;
  var section4;
  var t14;
  var blockquote5;
  var section5;
  var t15;
  var blockquote6;
  var section6;
  var t16;
  var blockquote7;
  var section7;
  var t17;
  var blockquote8;
  var section8;
  var t18;
  var blockquote9;
  var section9;
  var div4_class_value;
  var div4_transition;
  var t19;
  var script;
  var script_src_value;
  var current;
  var if_block = !
  /*showAll*/
  ctx[0] && create_if_block$2(ctx);
  var block = {
    c: function create() {
      div5 = element("div");
      article = element("article");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      t1 = text("Toda \n\t\t\t\t\t\t");
      span = element("span");
      t2 = text("la");
      t3 = text("\n\t\t\t\t\t\tdata");
      t4 = space();
      div1 = element("div");
      h2 = element("h2");
      t5 = text("ESTAMOS EN TIK TOK para activar una convivencia digital positiva!");
      t6 = space();
      p = element("p");
      t7 = text("Subí un video y mencionanos en @corazonesymentes");
      t8 = space();
      div3 = element("div");
      blockquote0 = element("blockquote");
      section0 = element("section");
      t9 = space();
      blockquote1 = element("blockquote");
      section1 = element("section");
      t10 = space();
      blockquote2 = element("blockquote");
      section2 = element("section");
      t11 = space();
      if (if_block) if_block.c();
      t12 = space();
      div4 = element("div");
      blockquote3 = element("blockquote");
      section3 = element("section");
      t13 = space();
      blockquote4 = element("blockquote");
      section4 = element("section");
      t14 = space();
      blockquote5 = element("blockquote");
      section5 = element("section");
      t15 = space();
      blockquote6 = element("blockquote");
      section6 = element("section");
      t16 = space();
      blockquote7 = element("blockquote");
      section7 = element("section");
      t17 = space();
      blockquote8 = element("blockquote");
      section8 = element("section");
      t18 = space();
      blockquote9 = element("blockquote");
      section9 = element("section");
      t19 = space();
      script = element("script");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div5_nodes = children(div5);
      article = claim_element(div5_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Toda \n\t\t\t\t\t\t");
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "la");
      span_nodes.forEach(detach_dev);
      t3 = claim_text(h1_nodes, "\n\t\t\t\t\t\tdata");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t5 = claim_text(h2_nodes, "ESTAMOS EN TIK TOK para activar una convivencia digital positiva!");
      h2_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t7 = claim_text(p_nodes, "Subí un video y mencionanos en @corazonesymentes");
      p_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      blockquote0 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote0_nodes = children(blockquote0);
      section0 = claim_element(blockquote0_nodes, "SECTION", {});
      children(section0).forEach(detach_dev);
      blockquote0_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      blockquote1 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote1_nodes = children(blockquote1);
      section1 = claim_element(blockquote1_nodes, "SECTION", {});
      children(section1).forEach(detach_dev);
      blockquote1_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      blockquote2 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote2_nodes = children(blockquote2);
      section2 = claim_element(blockquote2_nodes, "SECTION", {});
      children(section2).forEach(detach_dev);
      blockquote2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t11 = claim_space(article_nodes);
      if (if_block) if_block.l(article_nodes);
      t12 = claim_space(article_nodes);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      blockquote3 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote3_nodes = children(blockquote3);
      section3 = claim_element(blockquote3_nodes, "SECTION", {});
      children(section3).forEach(detach_dev);
      blockquote3_nodes.forEach(detach_dev);
      t13 = claim_space(div4_nodes);
      blockquote4 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote4_nodes = children(blockquote4);
      section4 = claim_element(blockquote4_nodes, "SECTION", {});
      children(section4).forEach(detach_dev);
      blockquote4_nodes.forEach(detach_dev);
      t14 = claim_space(div4_nodes);
      blockquote5 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote5_nodes = children(blockquote5);
      section5 = claim_element(blockquote5_nodes, "SECTION", {});
      children(section5).forEach(detach_dev);
      blockquote5_nodes.forEach(detach_dev);
      t15 = claim_space(div4_nodes);
      blockquote6 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote6_nodes = children(blockquote6);
      section6 = claim_element(blockquote6_nodes, "SECTION", {});
      children(section6).forEach(detach_dev);
      blockquote6_nodes.forEach(detach_dev);
      t16 = claim_space(div4_nodes);
      blockquote7 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote7_nodes = children(blockquote7);
      section7 = claim_element(blockquote7_nodes, "SECTION", {});
      children(section7).forEach(detach_dev);
      blockquote7_nodes.forEach(detach_dev);
      t17 = claim_space(div4_nodes);
      blockquote8 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote8_nodes = children(blockquote8);
      section8 = claim_element(blockquote8_nodes, "SECTION", {});
      var section8_nodes = children(section8);
      section8_nodes.forEach(detach_dev);
      blockquote8_nodes.forEach(detach_dev);
      t18 = claim_space(div4_nodes);
      blockquote9 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote9_nodes = children(blockquote9);
      section9 = claim_element(blockquote9_nodes, "SECTION", {});
      children(section9).forEach(detach_dev);
      blockquote9_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t19 = claim_space(article_nodes);
      script = claim_element(article_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script_nodes = children(script);
      script_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "excl_globo.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Signo de exclamación");
      attr_dev(img, "class", "w-12 sm:w-24");
      add_location(img, file$i, 14, 5, 373);
      attr_dev(span, "class", "text-black");
      add_location(span, file$i, 17, 6, 508);
      attr_dev(h1, "class", "fushia-text uppercase ");
      add_location(h1, file$i, 15, 5, 454);
      attr_dev(div0, "class", "flex items-center flex-wrap");
      add_location(div0, file$i, 13, 4, 326);
      attr_dev(h2, "class", "text-black uppercase  ");
      add_location(h2, file$i, 23, 5, 609);
      attr_dev(p, "class", "fushia-text font-sans ");
      add_location(p, file$i, 24, 5, 721);
      attr_dev(div1, "class", "ml-3");
      add_location(div1, file$i, 22, 4, 585);
      attr_dev(div2, "class", "grid sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-10 mb-10");
      add_location(div2, file$i, 12, 3, 255);
      add_location(section0, file$i, 34, 5, 1063);
      attr_dev(blockquote0, "class", "tiktok-embed");
      attr_dev(blockquote0, "cite", "https://www.tiktok.com/@corazonesymentes/video/6958468814375881989");
      attr_dev(blockquote0, "data-video-id", "6958468814375881989");
      add_location(blockquote0, file$i, 30, 3, 900);
      add_location(section1, file$i, 40, 5, 1266);
      attr_dev(blockquote1, "class", "tiktok-embed");
      attr_dev(blockquote1, "cite", "https://www.tiktok.com/@corazonesymentes/video/6954373530138053893");
      attr_dev(blockquote1, "data-video-id", "6954373530138053893");
      add_location(blockquote1, file$i, 36, 3, 1103);
      add_location(section2, file$i, 47, 5, 1474);
      attr_dev(blockquote2, "class", "tiktok-embed");
      attr_dev(blockquote2, "cite", "https://www.tiktok.com/@corazonesymentes/video/6953286503363579142");
      attr_dev(blockquote2, "data-video-id", "6953286503363579142");
      add_location(blockquote2, file$i, 43, 3, 1310);
      attr_dev(div3, "class", "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10");
      add_location(div3, file$i, 29, 2, 839);
      add_location(section3, file$i, 62, 5, 2018);
      attr_dev(blockquote3, "class", "tiktok-embed");
      attr_dev(blockquote3, "cite", "https://www.tiktok.com/@corazonesymentes/video/6951784224907152645");
      attr_dev(blockquote3, "data-video-id", "6951784224907152645");
      add_location(blockquote3, file$i, 58, 3, 1854);
      add_location(section4, file$i, 68, 5, 2222);
      attr_dev(blockquote4, "class", "tiktok-embed");
      attr_dev(blockquote4, "cite", "https://www.tiktok.com/@corazonesymentes/video/6950673518027705606");
      attr_dev(blockquote4, "data-video-id", "6950673518027705606");
      add_location(blockquote4, file$i, 64, 3, 2058);
      add_location(section5, file$i, 74, 5, 2426);
      attr_dev(blockquote5, "class", "tiktok-embed");
      attr_dev(blockquote5, "cite", "https://www.tiktok.com/@corazonesymentes/video/6948105586672274694");
      attr_dev(blockquote5, "data-video-id", "6948105586672274694");
      add_location(blockquote5, file$i, 70, 3, 2262);
      add_location(section6, file$i, 80, 4, 2629);
      attr_dev(blockquote6, "class", "tiktok-embed");
      attr_dev(blockquote6, "cite", "https://www.tiktok.com/@corazonesymentes/video/6945179190819933446");
      attr_dev(blockquote6, "data-video-id", "6945179190819933446");
      add_location(blockquote6, file$i, 76, 3, 2466);
      add_location(section7, file$i, 86, 5, 2832);
      attr_dev(blockquote7, "class", "tiktok-embed");
      attr_dev(blockquote7, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943423751316983045");
      attr_dev(blockquote7, "data-video-id", "6943423751316983045");
      add_location(blockquote7, file$i, 82, 3, 2669);
      add_location(section8, file$i, 92, 4, 3036);
      attr_dev(blockquote8, "class", "tiktok-embed");
      attr_dev(blockquote8, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943419461844094213");
      attr_dev(blockquote8, "data-video-id", "6943419461844094213");
      add_location(blockquote8, file$i, 88, 3, 2872);
      add_location(section9, file$i, 99, 5, 3246);
      attr_dev(blockquote9, "class", "tiktok-embed");
      attr_dev(blockquote9, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943253691826801925");
      attr_dev(blockquote9, "data-video-id", "6943253691826801925");
      add_location(blockquote9, file$i, 95, 3, 3082);
      attr_dev(div4, "class", div4_class_value = "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 " + (!
      /*showAll*/
      ctx[0] ? "hidden" : ""));
      add_location(div4, file$i, 57, 2, 1718);
      script.async = true;
      if (script.src !== (script_src_value = "https://www.tiktok.com/embed.js")) attr_dev(script, "src", script_src_value);
      add_location(script, file$i, 102, 2, 3294);
      attr_dev(article, "class", "container mx-auto ");
      add_location(article, file$i, 10, 1, 212);
      attr_dev(div5, "class", "bg-white p-10");
      attr_dev(div5, "id", "toda-la-data");
      add_location(div5, file$i, 9, 0, 165);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, article);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(h1, span);
      append_dev(span, t2);
      append_dev(h1, t3);
      append_dev(div2, t4);
      append_dev(div2, div1);
      append_dev(div1, h2);
      append_dev(h2, t5);
      append_dev(div1, t6);
      append_dev(div1, p);
      append_dev(p, t7);
      append_dev(article, t8);
      append_dev(article, div3);
      append_dev(div3, blockquote0);
      append_dev(blockquote0, section0);
      append_dev(div3, t9);
      append_dev(div3, blockquote1);
      append_dev(blockquote1, section1);
      append_dev(div3, t10);
      append_dev(div3, blockquote2);
      append_dev(blockquote2, section2);
      append_dev(article, t11);
      if (if_block) if_block.m(article, null);
      append_dev(article, t12);
      append_dev(article, div4);
      append_dev(div4, blockquote3);
      append_dev(blockquote3, section3);
      append_dev(div4, t13);
      append_dev(div4, blockquote4);
      append_dev(blockquote4, section4);
      append_dev(div4, t14);
      append_dev(div4, blockquote5);
      append_dev(blockquote5, section5);
      append_dev(div4, t15);
      append_dev(div4, blockquote6);
      append_dev(blockquote6, section6);
      append_dev(div4, t16);
      append_dev(div4, blockquote7);
      append_dev(blockquote7, section7);
      append_dev(div4, t17);
      append_dev(div4, blockquote8);
      append_dev(blockquote8, section8);
      append_dev(div4, t18);
      append_dev(div4, blockquote9);
      append_dev(blockquote9, section9);
      append_dev(article, t19);
      append_dev(article, script);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*showAll*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$2(ctx);
          if_block.c();
          if_block.m(article, t12);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*showAll*/
      1 && div4_class_value !== (div4_class_value = "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 " + (!
      /*showAll*/
      ctx[0] ? "hidden" : ""))) {
        attr_dev(div4, "class", div4_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!div4_transition) div4_transition = create_bidirectional_transition(div4, fade, {
          delay: 50,
          duration: 300
        }, true);
        div4_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!div4_transition) div4_transition = create_bidirectional_transition(div4, fade, {
        delay: 50,
        duration: 300
      }, false);
      div4_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
      if (if_block) if_block.d();
      if (detaching && div4_transition) div4_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$i.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$i($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Todaladata", slots, []);
  var showAll = false;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Todaladata> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, showAll = true);
  };

  $$self.$capture_state = function () {
    return {
      fade: fade,
      showAll: showAll
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("showAll" in $$props) $$invalidate(0, showAll = $$props.showAll);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [showAll, click_handler];
}

var Todaladata = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Todaladata, _SvelteComponentDev);

  var _super = _createSuper$i(Todaladata);

  function Todaladata(options) {
    var _this;

    _classCallCheck(this, Todaladata);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$i, create_fragment$i, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Todaladata",
      options: options,
      id: create_fragment$i.name
    });
    return _this;
  }

  return Todaladata;
}(SvelteComponentDev);

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$h = "src/components/DocumentDownload.svelte";

function create_fragment$h(ctx) {
  var div1;
  var img;
  var img_src_value;
  var t0;
  var div0;
  var h5;
  var t1;
  var t2;
  var t3;
  var h3;
  var t4;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div1 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h5 = element("h5");
      t1 = text("capitulo ");
      t2 = text(
      /*chapter*/
      ctx[0]);
      t3 = space();
      h3 = element("h3");
      t4 = text(
      /*title*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h5 = claim_element(div0_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t1 = claim_text(h5_nodes, "capitulo ");
      t2 = claim_text(h5_nodes,
      /*chapter*/
      ctx[0]);
      h5_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      h3 = claim_element(div0_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t4 = claim_text(h3_nodes,
      /*title*/
      ctx[1]);
      h3_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "/icons/icon-document.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "document-icon svelte-14lxvia");
      attr_dev(img, "alt", "Ícono de documento");
      add_location(img, file$h, 15, 2, 295);
      attr_dev(h5, "class", "text-xs uppercase font-sans font-bold");
      add_location(h5, file$h, 17, 4, 442);
      attr_dev(h3, "class", "uppercase text-2xl font-bold text-md");
      add_location(h3, file$h, 18, 4, 520);
      attr_dev(div0, "class", "flex flex-col border-b border-black pb-3");
      add_location(div0, file$h, 16, 2, 383);
      attr_dev(div1, "class", "flex mt-5 mb-5 cursor-pointer hover:underline");
      add_location(div1, file$h, 14, 0, 209);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, img);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(div0, h5);
      append_dev(h5, t1);
      append_dev(h5, t2);
      append_dev(div0, t3);
      append_dev(div0, h3);
      append_dev(h3, t4);

      if (!mounted) {
        dispose = listen_dev(div1, "click",
        /*openDocument*/
        ctx[2], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*chapter*/
      1) set_data_dev(t2,
      /*chapter*/
      ctx[0]);
      if (dirty &
      /*title*/
      2) set_data_dev(t4,
      /*title*/
      ctx[1]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$h.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$h($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("DocumentDownload", slots, []);
  var chapter = $$props.chapter;
  var title = $$props.title;
  var url = $$props.url;

  var openDocument = function openDocument() {
    window.open(url, "_blank");
  };

  var writable_props = ["chapter", "title", "url"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<DocumentDownload> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("chapter" in $$props) $$invalidate(0, chapter = $$props.chapter);
    if ("title" in $$props) $$invalidate(1, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
  };

  $$self.$capture_state = function () {
    return {
      chapter: chapter,
      title: title,
      url: url,
      openDocument: openDocument
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("chapter" in $$props) $$invalidate(0, chapter = $$props.chapter);
    if ("title" in $$props) $$invalidate(1, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
    if ("openDocument" in $$props) $$invalidate(2, openDocument = $$props.openDocument);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [chapter, title, openDocument, url];
}

var DocumentDownload = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(DocumentDownload, _SvelteComponentDev);

  var _super = _createSuper$h(DocumentDownload);

  function DocumentDownload(options) {
    var _this;

    _classCallCheck(this, DocumentDownload);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$h, create_fragment$h, safe_not_equal, {
      chapter: 0,
      title: 1,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "DocumentDownload",
      options: options,
      id: create_fragment$h.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*chapter*/
    ctx[0] === undefined && !("chapter" in props)) {
      console.warn("<DocumentDownload> was created without expected prop 'chapter'");
    }

    if (
    /*title*/
    ctx[1] === undefined && !("title" in props)) {
      console.warn("<DocumentDownload> was created without expected prop 'title'");
    }

    if (
    /*url*/
    ctx[3] === undefined && !("url" in props)) {
      console.warn("<DocumentDownload> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(DocumentDownload, [{
    key: "chapter",
    get: function get() {
      throw new Error("<DocumentDownload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentDownload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<DocumentDownload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentDownload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<DocumentDownload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentDownload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return DocumentDownload;
}(SvelteComponentDev);

var documents = [{
  title: "Empatía: la base de la sociabilidad",
  url: "/documents/CAPÍTULO_1_C&M.pdf"
}, {
  title: "Sesgo de confirmación: cuestionemos nuestras opiniones.",
  url: "/documents/CAPÍTULO_2_C&M.pdf"
}, {
  title: "Disonancia cognitiva: nuestro grupo no siempre tiene razón.",
  url: "/documents/CAPÍTULO_3_C&M.pdf"
}, {
  title: "Sesgo de atribución: seamos conscientes de nuestros prejuicios.",
  url: "/documents/CAPÍTULO_4_C&M.pdf"
}, {
  title: "La nueva normalidad es la diversidad",
  url: "/documents/CAPÍTULO_5_C&M.pdf"
}, {
  title: "La privacidad como valor",
  url: "/documents/CAPÍTULO_6_C&M.pdf"
}, {
  title: "Polarización: No todo es una lucha entre el bien y el mal.",
  url: "/documents/CAPÍTULO_7_C&M.pdf"
}, {
  title: "Información y desinformación en redes: No todo lo que se viraliza es verdadero.",
  url: "/documents/CAPÍTULO_8_C&M.pdf"
}];

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$g = "src/components/Articulo.svelte";

function get_each_context$2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
} // (40:3) {#each documents as item, index}


function create_each_block$2(ctx) {
  var document;
  var current;
  document = new DocumentDownload({
    props: {
      title:
      /*item*/
      ctx[0].title,
      url:
      /*item*/
      ctx[0].url,
      chapter:
      /*index*/
      ctx[2] + 1
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(document.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(document.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(document, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(document.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(document.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(document, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$2.name,
    type: "each",
    source: "(40:3) {#each documents as item, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment$g(ctx) {
  var div7;
  var article;
  var div5;
  var div1;
  var div0;
  var h1;
  var span2;
  var span0;
  var t0;
  var t1;
  var span1;
  var t2;
  var div4;
  var h4;
  var t3;
  var br;
  var t4;
  var t5;
  var div2;
  var h3;
  var t6;
  var t7;
  var div3;
  var a;
  var span3;
  var t8;
  var t9;
  var div6;
  var current;
  var each_value = documents;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div7 = element("div");
      article = element("article");
      div5 = element("div");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span2 = element("span");
      span0 = element("span");
      t0 = text("CONOCE TU MENTE FUERA Y DENTRO DE INTERNET");
      t1 = space();
      span1 = element("span");
      t2 = space();
      div4 = element("div");
      h4 = element("h4");
      t3 = text("Escribimos un libro para que podamos ");
      br = element("br");
      t4 = text("\n\t\t\t\tcontribuir a una nueva convivencia digital positiva y empática.");
      t5 = space();
      div2 = element("div");
      h3 = element("h3");
      t6 = text("¿Querés el libro completo?");
      t7 = space();
      div3 = element("div");
      a = element("a");
      span3 = element("span");
      t8 = text("Descargá el libro");
      t9 = space();
      div6 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div7 = claim_element(nodes, "DIV", {
        class: true,
        style: true,
        id: true
      });
      var div7_nodes = children(div7);
      article = claim_element(div7_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div5 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span2 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "CONOCE TU MENTE FUERA Y DENTRO DE INTERNET");
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(span2_nodes);
      span1 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      span1_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h4 = claim_element(div4_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t3 = claim_text(h4_nodes, "Escribimos un libro para que podamos ");
      br = claim_element(h4_nodes, "BR", {});
      t4 = claim_text(h4_nodes, "\n\t\t\t\tcontribuir a una nueva convivencia digital positiva y empática.");
      h4_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h3 = claim_element(div2_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t6 = claim_text(h3_nodes, "¿Querés el libro completo?");
      h3_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      a = claim_element(div3_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a_nodes = children(a);
      span3 = claim_element(a_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t8 = claim_text(span3_nodes, "Descargá el libro");
      span3_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t9 = claim_space(article_nodes);
      div6 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div6_nodes);
      }

      div6_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "bg-gris leading-normal");
      add_location(span0, file$g, 12, 7, 545);
      attr_dev(span1, "class", "text-black");
      add_location(span1, file$g, 12, 95, 633);
      attr_dev(span2, "class", "text-white");
      add_location(span2, file$g, 11, 6, 512);
      attr_dev(h1, "class", "uppercase");
      add_location(h1, file$g, 10, 5, 483);
      attr_dev(div0, "class", "flex");
      add_location(div0, file$g, 9, 16, 459);
      attr_dev(div1, "class", " p-3 flex items-center justify-center flex-col");
      add_location(div1, file$g, 8, 12, 366);
      add_location(br, file$g, 19, 41, 846);
      attr_dev(h4, "class", "mt-5 font-sans");
      add_location(h4, file$g, 18, 4, 777);
      attr_dev(h3, "class", "fushia-text uppercase");
      add_location(h3, file$g, 23, 5, 1021);
      attr_dev(div2, "class", "flex justify-center sm:justify-between items-center flex-wrap mt-5");
      add_location(div2, file$g, 22, 4, 935);
      attr_dev(span3, "class", "fushia-bg py-2 px-5 text-white text-lg border hover:border-gray-800 border-solid");
      add_location(span3, file$g, 30, 15, 1214);
      attr_dev(a, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a, "download", "");
      attr_dev(a, "class", "");
      add_location(a, file$g, 29, 5, 1146);
      attr_dev(div3, "class", "pt-10");
      add_location(div3, file$g, 28, 4, 1121);
      attr_dev(div4, "class", " md:col-span-2");
      add_location(div4, file$g, 17, 12, 744);
      attr_dev(div5, "class", "grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-3 mb-10");
      add_location(div5, file$g, 7, 2, 278);
      attr_dev(div6, "class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10");
      add_location(div6, file$g, 38, 2, 1399);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$g, 5, 1, 239);
      attr_dev(div7, "class", "p-10 tech-back px-2 sm:px-10 celeste-bg");
      set_style(div7, "background-color", "rgba(150, 120, 255, 0.3)");
      attr_dev(div7, "id", "libro");
      add_location(div7, file$g, 4, 0, 122);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div7, anchor);
      append_dev(div7, article);
      append_dev(article, div5);
      append_dev(div5, div1);
      append_dev(div1, div0);
      append_dev(div0, h1);
      append_dev(h1, span2);
      append_dev(span2, span0);
      append_dev(span0, t0);
      append_dev(span2, t1);
      append_dev(span2, span1);
      append_dev(div5, t2);
      append_dev(div5, div4);
      append_dev(div4, h4);
      append_dev(h4, t3);
      append_dev(h4, br);
      append_dev(h4, t4);
      append_dev(div4, t5);
      append_dev(div4, div2);
      append_dev(div2, h3);
      append_dev(h3, t6);
      append_dev(div4, t7);
      append_dev(div4, div3);
      append_dev(div3, a);
      append_dev(a, span3);
      append_dev(span3, t8);
      append_dev(article, t9);
      append_dev(article, div6);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div6, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*documents*/
      0) {
        each_value = documents;
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context$2(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$2(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div6, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div7);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$g.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$g($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Articulo", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Articulo> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Document: DocumentDownload,
      documents: documents
    };
  };

  return [];
}

var Articulo = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Articulo, _SvelteComponentDev);

  var _super = _createSuper$g(Articulo);

  function Articulo(options) {
    var _this;

    _classCallCheck(this, Articulo);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$g, create_fragment$g, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Articulo",
      options: options,
      id: create_fragment$g.name
    });
    return _this;
  }

  return Articulo;
}(SvelteComponentDev);

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$f = "src/components/ForoDocente.svelte";

function create_fragment$f(ctx) {
  var div5;
  var article;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var span1;
  var span0;
  var t1;
  var t2;
  var t3;
  var div1;
  var h20;
  var t4;
  var t5;
  var div3;
  var h21;
  var t6;
  var t7;
  var a0;
  var span2;
  var t8;
  var t9;
  var p0;
  var t10;
  var br0;
  var t11;
  var br1;
  var t12;
  var t13;
  var p1;
  var span3;
  var t14;
  var t15;
  var p2;
  var t16;
  var t17;
  var p3;
  var t18;
  var t19;
  var p4;
  var t20;
  var t21;
  var div4;
  var span4;
  var a1;
  var t22;
  var block = {
    c: function create() {
      div5 = element("div");
      article = element("article");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      span1 = element("span");
      span0 = element("span");
      t1 = text("Foro");
      t2 = text(" docente");
      t3 = space();
      div1 = element("div");
      h20 = element("h2");
      t4 = text("Un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre les jovenes y en las aulas");
      t5 = space();
      div3 = element("div");
      h21 = element("h2");
      t6 = text("¿QUERÉS FORMAR PARTE DEL FORO?");
      t7 = space();
      a0 = element("a");
      span2 = element("span");
      t8 = text("Descargá el libro");
      t9 = space();
      p0 = element("p");
      t10 = text("Dos encuentros para trabajar estrategias y herramientas pedagógicas");
      br0 = element("br");
      t11 = text("\n      sobre fake news y convivencia digital positiva");
      br1 = element("br");
      t12 = text("\n      para trabajar en el aula y debatir con lxs estudiantes.");
      t13 = space();
      p1 = element("p");
      span3 = element("span");
      t14 = text("¡Sumate a los próximos encuentros!");
      t15 = space();
      p2 = element("p");
      t16 = text("Primer encuentro - 18/08 - 17:00 a 18:30");
      t17 = space();
      p3 = element("p");
      t18 = text("Segundo encuentro - 20/08 - 17:00 a 18:30");
      t19 = space();
      p4 = element("p");
      t20 = text("La actividad es gratuita y online vía Google Meet, con cupo limitado.");
      t21 = space();
      div4 = element("div");
      span4 = element("span");
      a1 = element("a");
      t22 = text("QUIERO INSCRIBIRME");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div5_nodes = children(div5);
      article = claim_element(div5_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        width: true,
        src: true,
        id: true,
        alt: true,
        class: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span1 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      span0 = claim_element(span1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "Foro");
      span0_nodes.forEach(detach_dev);
      t2 = claim_text(span1_nodes, " docente");
      span1_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t4 = claim_text(h20_nodes, "Un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre les jovenes y en las aulas");
      h20_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h21 = claim_element(div3_nodes, "H2", {});
      var h21_nodes = children(h21);
      t6 = claim_text(h21_nodes, "¿QUERÉS FORMAR PARTE DEL FORO?");
      h21_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      a0 = claim_element(div3_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a0_nodes = children(a0);
      span2 = claim_element(a0_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "Descargá el libro");
      span2_nodes.forEach(detach_dev);
      a0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(article_nodes);
      p0 = claim_element(article_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t10 = claim_text(p0_nodes, "Dos encuentros para trabajar estrategias y herramientas pedagógicas");
      br0 = claim_element(p0_nodes, "BR", {});
      t11 = claim_text(p0_nodes, "\n      sobre fake news y convivencia digital positiva");
      br1 = claim_element(p0_nodes, "BR", {});
      t12 = claim_text(p0_nodes, "\n      para trabajar en el aula y debatir con lxs estudiantes.");
      p0_nodes.forEach(detach_dev);
      t13 = claim_space(article_nodes);
      p1 = claim_element(article_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      span3 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t14 = claim_text(span3_nodes, "¡Sumate a los próximos encuentros!");
      span3_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(article_nodes);
      p2 = claim_element(article_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t16 = claim_text(p2_nodes, "Primer encuentro - 18/08 - 17:00 a 18:30");
      p2_nodes.forEach(detach_dev);
      t17 = claim_space(article_nodes);
      p3 = claim_element(article_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t18 = claim_text(p3_nodes, "Segundo encuentro - 20/08 - 17:00 a 18:30");
      p3_nodes.forEach(detach_dev);
      t19 = claim_space(article_nodes);
      p4 = claim_element(article_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t20 = claim_text(p4_nodes, "La actividad es gratuita y online vía Google Meet, con cupo limitado.");
      p4_nodes.forEach(detach_dev);
      t21 = claim_space(article_nodes);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      span4 = claim_element(div4_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      a1 = claim_element(span4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a1_nodes = children(a1);
      t22 = claim_text(a1_nodes, "QUIERO INSCRIBIRME");
      a1_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "100px");
      if (img.src !== (img_src_value = "dialog.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "id", "dialog");
      attr_dev(img, "alt", "Ícono de dialogo");
      attr_dev(img, "class", "svelte-ikfrpc");
      add_location(img, file$f, 37, 8, 1158);
      attr_dev(span0, "class", "text-blue-300");
      add_location(span0, file$f, 39, 33, 1330);
      attr_dev(span1, "class", "bg-white");
      add_location(span1, file$f, 39, 10, 1307);
      attr_dev(h1, "class", "uppercase  text-black text-5xl p-2 text-bold");
      add_location(h1, file$f, 38, 8, 1239);
      attr_dev(div0, "class", "mr-5 flex");
      add_location(div0, file$f, 36, 6, 1126);
      attr_dev(h20, "class", "text-white font-sans text-xl");
      add_location(h20, file$f, 43, 4, 1441);
      attr_dev(div1, "class", "ml-3");
      add_location(div1, file$f, 42, 6, 1418);
      attr_dev(div2, "class", "flex items-center justify-start");
      add_location(div2, file$f, 35, 4, 1074);
      add_location(h21, file$f, 49, 6, 1793);
      attr_dev(span2, "class", "bg-white");
      add_location(span2, file$f, 51, 37, 1929);
      attr_dev(a0, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a0, "download", "");
      attr_dev(a0, "class", "text-lg p-1 text-black");
      add_location(a0, file$f, 50, 6, 1839);
      attr_dev(div3, "class", "fushia-bg text-2xl uppercase p-10 my-5 mx-auto text-white\ttext-center");
      add_location(div3, file$f, 48, 4, 1703);
      add_location(br0, file$f, 55, 73, 2128);
      add_location(br1, file$f, 56, 52, 2185);
      attr_dev(p0, "class", "text-white mt-10 text-xl font-sans");
      add_location(p0, file$f, 54, 4, 2008);
      attr_dev(span3, "class", "bg-ligth-blue");
      add_location(span3, file$f, 59, 58, 2319);
      attr_dev(p1, "class", "text-white mt-10 tmt-5 text-2xl font-sans ");
      add_location(p1, file$f, 59, 4, 2265);
      attr_dev(p2, "class", "text-white mt-5 text-2xl font-sans");
      add_location(p2, file$f, 60, 4, 2397);
      attr_dev(p3, "class", "text-white mt-5 text-2xl font-sans");
      add_location(p3, file$f, 61, 4, 2492);
      attr_dev(p4, "class", "text-white mt-10 text-xl font-sans");
      add_location(p4, file$f, 63, 4, 2589);
      attr_dev(a1, "href", "https://form.jotform.com/211795972886072");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "class", "uppercase mt-5 p-3 leading-6 ");
      add_location(a1, file$f, 66, 8, 2809);
      attr_dev(span4, "class", "inscripcion-talleres text-2xl svelte-ikfrpc");
      add_location(span4, file$f, 65, 6, 2756);
      attr_dev(div4, "class", "text-left mt-10 mb-10");
      add_location(div4, file$f, 64, 4, 2714);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$f, 34, 2, 1034);
      attr_dev(div5, "class", "bg-black p-10");
      attr_dev(div5, "id", "talleres-para-docentes");
      add_location(div5, file$f, 33, 0, 976);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, article);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, span1);
      append_dev(span1, span0);
      append_dev(span0, t1);
      append_dev(span1, t2);
      append_dev(div2, t3);
      append_dev(div2, div1);
      append_dev(div1, h20);
      append_dev(h20, t4);
      append_dev(article, t5);
      append_dev(article, div3);
      append_dev(div3, h21);
      append_dev(h21, t6);
      append_dev(div3, t7);
      append_dev(div3, a0);
      append_dev(a0, span2);
      append_dev(span2, t8);
      append_dev(article, t9);
      append_dev(article, p0);
      append_dev(p0, t10);
      append_dev(p0, br0);
      append_dev(p0, t11);
      append_dev(p0, br1);
      append_dev(p0, t12);
      append_dev(article, t13);
      append_dev(article, p1);
      append_dev(p1, span3);
      append_dev(span3, t14);
      append_dev(article, t15);
      append_dev(article, p2);
      append_dev(p2, t16);
      append_dev(article, t17);
      append_dev(article, p3);
      append_dev(p3, t18);
      append_dev(article, t19);
      append_dev(article, p4);
      append_dev(p4, t20);
      append_dev(article, t21);
      append_dev(article, div4);
      append_dev(div4, span4);
      append_dev(span4, a1);
      append_dev(a1, t22);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$f.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$f($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("ForoDocente", slots, []);
  onMount(function () {
    (function () {
      var js,
          q,
          d = document,
          gi = d.getElementById,
          ce = d.createElement,
          gt = d.getElementsByTagName,
          id = "typef_orm",
          b = "https://embed.typeform.com/";

      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
      }
    })();
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ForoDocente> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount
    };
  };

  return [];
}

var ForoDocente = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ForoDocente, _SvelteComponentDev);

  var _super = _createSuper$f(ForoDocente);

  function ForoDocente(options) {
    var _this;

    _classCallCheck(this, ForoDocente);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$f, create_fragment$f, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ForoDocente",
      options: options,
      id: create_fragment$f.name
    });
    return _this;
  }

  return ForoDocente;
}(SvelteComponentDev);

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */


function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */


function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

var cookies = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

var isURLSameOrigin = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults_1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }

    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, mergeDeepProperties);
  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

var isAxiosError = function isAxiosError(payload) {
  return _typeof(payload) === 'object' && payload.isAxiosError === true;
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios_1.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios$1 = createInstance(defaults_1); // Expose Axios class to allow class inheritance

axios$1.Axios = Axios_1; // Factory for creating new instances

axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel; // Expose all/spread

axios$1.all = function all(promises) {
  return Promise.all(promises);
};

axios$1.spread = spread; // Expose isAxiosError

axios$1.isAxiosError = isAxiosError;
var axios_1 = axios$1; // Allow use of default import syntax in TypeScript

var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$e = "src/components/Kit.svelte"; // (59:4) {#if opened}

function create_if_block$1(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(
      /*description*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes,
      /*description*/
      ctx[0]);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "my-3 text-center font-sans");
      add_location(p, file$e, 59, 6, 1332);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*description*/
      1) set_data_dev(t,
      /*description*/
      ctx[0]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(59:4) {#if opened}",
    ctx: ctx
  });
  return block;
}

function create_fragment$e(ctx) {
  var div2;
  var div0;
  var p;
  var t0;
  var t1;
  var a;
  var img0;
  var img0_src_value;
  var t2;
  var div1;
  var img1;
  var img1_src_value;
  var t3;
  var h3;
  var t4;
  var t5;
  var t6;
  var img2;
  var img2_src_value;
  var mounted;
  var dispose;
  var if_block =
  /*opened*/
  ctx[4] && create_if_block$1(ctx);
  var block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      p = element("p");
      t0 = text(
      /*type*/
      ctx[1]);
      t1 = space();
      a = element("a");
      img0 = element("img");
      t2 = space();
      div1 = element("div");
      img1 = element("img");
      t3 = space();
      h3 = element("h3");
      t4 = text(
      /*title*/
      ctx[2]);
      t5 = space();
      if (if_block) if_block.c();
      t6 = space();
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes,
      /*type*/
      ctx[1]);
      p_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      a = claim_element(div0_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      img0 = claim_element(a_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img1 = claim_element(div1_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t3 = claim_space(div1_nodes);
      h3 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t4 = claim_text(h3_nodes,
      /*title*/
      ctx[2]);
      h3_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      if (if_block) if_block.l(div2_nodes);
      t6 = claim_space(div2_nodes);
      img2 = claim_element(div2_nodes, "IMG", {
        width: true,
        class: true,
        src: true,
        alt: true
      });
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "uppercase font-bold font-sans text-sm\t text-gray-400");
      add_location(p, file$e, 47, 4, 896);
      attr_dev(img0, "class", " float-right");
      if (img0.src !== (img0_src_value = "open.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "abrir link");
      add_location(img0, file$e, 49, 6, 1009);
      attr_dev(a, "class", " p-2");
      attr_dev(a, "href",
      /*url*/
      ctx[3]);
      add_location(a, file$e, 48, 4, 975);
      attr_dev(div0, "class", "flex justify-end items-center mb-3");
      add_location(div0, file$e, 46, 2, 843);
      if (img1.src !== (img1_src_value =
      /*icon*/
      ctx[5])) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "class", "document-icon  md:block svelte-v8qucv");
      attr_dev(img1, "alt",
      /*type*/
      ctx[1]);
      add_location(img1, file$e, 53, 4, 1150);
      attr_dev(h3, "class", "uppercase font-bold text-md pb-1 text-center");
      add_location(h3, file$e, 55, 4, 1223);
      attr_dev(div1, "class", "flex flex-col justify-between items-center");
      add_location(div1, file$e, 52, 2, 1089);
      attr_dev(img2, "width", "20px");
      attr_dev(img2, "class", "text-right mx-auto font-sans cursor-pointer p-1");
      if (img2.src !== (img2_src_value =
      /*opened*/
      ctx[4] ? "less.png" : "more.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Ver más");
      add_location(img2, file$e, 64, 4, 1420);
      attr_dev(div2, "class", "w-3/4 md:w-11/12 mx-auto flex flex-col border justify-start border-gray-400 m-5 p-3 ");
      add_location(div2, file$e, 44, 0, 739);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, p);
      append_dev(p, t0);
      append_dev(div0, t1);
      append_dev(div0, a);
      append_dev(a, img0);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, img1);
      append_dev(div1, t3);
      append_dev(div1, h3);
      append_dev(h3, t4);
      append_dev(div2, t5);
      if (if_block) if_block.m(div2, null);
      append_dev(div2, t6);
      append_dev(div2, img2);

      if (!mounted) {
        dispose = listen_dev(img2, "click",
        /*toggle*/
        ctx[6], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*type*/
      2) set_data_dev(t0,
      /*type*/
      ctx[1]);

      if (dirty &
      /*url*/
      8) {
        attr_dev(a, "href",
        /*url*/
        ctx[3]);
      }

      if (dirty &
      /*icon*/
      32 && img1.src !== (img1_src_value =
      /*icon*/
      ctx[5])) {
        attr_dev(img1, "src", img1_src_value);
      }

      if (dirty &
      /*type*/
      2) {
        attr_dev(img1, "alt",
        /*type*/
        ctx[1]);
      }

      if (dirty &
      /*title*/
      4) set_data_dev(t4,
      /*title*/
      ctx[2]);

      if (
      /*opened*/
      ctx[4]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(div2, t6);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*opened*/
      16 && img2.src !== (img2_src_value =
      /*opened*/
      ctx[4] ? "less.png" : "more.png")) {
        attr_dev(img2, "src", img2_src_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$e.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$e($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Kit", slots, []);
  var description = $$props.description;
  var type = $$props.type;
  var title = $$props.title;
  var url = $$props.url;
  var opened = false;

  var toggle = function toggle() {
    $$invalidate(4, opened = !opened);
  };

  var icon;

  switch (type) {
    case "GUÍA":
    case "ARTÍCULO":
      icon = "icons/article-icon.png";
      break;

    case "PODCAST":
      icon = "icons/podcast-icon.png";
      break;

    case "VIDEO":
    case "PELICULA":
      icon = "icons/video-icon.png";
      break;

    case "PLATAFORMA":
      icon = "icons/app.png";
      break;

    case "JUEGO":
      icon = "icons/mando.svg";
      break;

    default:
      icon = "icons/article-icon.png";
      break;
  }

  var writable_props = ["description", "type", "title", "url"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Kit> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("description" in $$props) $$invalidate(0, description = $$props.description);
    if ("type" in $$props) $$invalidate(1, type = $$props.type);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
  };

  $$self.$capture_state = function () {
    return {
      description: description,
      type: type,
      title: title,
      url: url,
      opened: opened,
      toggle: toggle,
      icon: icon
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("description" in $$props) $$invalidate(0, description = $$props.description);
    if ("type" in $$props) $$invalidate(1, type = $$props.type);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
    if ("opened" in $$props) $$invalidate(4, opened = $$props.opened);
    if ("toggle" in $$props) $$invalidate(6, toggle = $$props.toggle);
    if ("icon" in $$props) $$invalidate(5, icon = $$props.icon);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [description, type, title, url, opened, icon, toggle];
}

var Kit = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Kit, _SvelteComponentDev);

  var _super = _createSuper$e(Kit);

  function Kit(options) {
    var _this;

    _classCallCheck(this, Kit);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$e, create_fragment$e, safe_not_equal, {
      description: 0,
      type: 1,
      title: 2,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Kit",
      options: options,
      id: create_fragment$e.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*description*/
    ctx[0] === undefined && !("description" in props)) {
      console.warn("<Kit> was created without expected prop 'description'");
    }

    if (
    /*type*/
    ctx[1] === undefined && !("type" in props)) {
      console.warn("<Kit> was created without expected prop 'type'");
    }

    if (
    /*title*/
    ctx[2] === undefined && !("title" in props)) {
      console.warn("<Kit> was created without expected prop 'title'");
    }

    if (
    /*url*/
    ctx[3] === undefined && !("url" in props)) {
      console.warn("<Kit> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(Kit, [{
    key: "description",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Kit;
}(SvelteComponentDev);

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$d = "src/components/KitHerramientas.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
} // (82:8) {#each newKits as item}


function create_each_block$1(ctx) {
  var kit;
  var current;
  var kit_spread_levels = [
  /*item*/
  ctx[11]];
  var kit_props = {};

  for (var i = 0; i < kit_spread_levels.length; i += 1) {
    kit_props = assign(kit_props, kit_spread_levels[i]);
  }

  kit = new Kit({
    props: kit_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(kit.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(kit.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(kit, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var kit_changes = dirty &
      /*newKits*/
      1 ? get_spread_update(kit_spread_levels, [get_spread_object(
      /*item*/
      ctx[11])]) : {};
      kit.$set(kit_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(kit.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(kit.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(kit, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(82:8) {#each newKits as item}",
    ctx: ctx
  });
  return block;
}

function create_fragment$d(ctx) {
  var div5;
  var article;
  var div2;
  var div0;
  var h1;
  var span;
  var t0;
  var t1;
  var div1;
  var p;
  var t2;
  var t3;
  var h40;
  var t4;
  var t5;
  var div3;
  var button0;
  var h41;
  var t6;
  var t7;
  var button1;
  var h42;
  var t8;
  var t9;
  var button2;
  var h43;
  var t10;
  var t11;
  var button3;
  var h44;
  var t12;
  var t13;
  var button4;
  var h45;
  var t14;
  var t15;
  var div4;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*newKits*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div5 = element("div");
      article = element("article");
      div2 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span = element("span");
      t0 = text("Kit de herramientas");
      t1 = space();
      div1 = element("div");
      p = element("p");
      t2 = text("Queremos que tengas este compilado con un poco de todo para habitar internet de forma segura, responsable y empática.");
      t3 = space();
      h40 = element("h4");
      t4 = text("ENCONTRÁ ArtÍculos, podcast, reflexiones, videos y más.");
      t5 = space();
      div3 = element("div");
      button0 = element("button");
      h41 = element("h4");
      t6 = text("Artículo");
      t7 = space();
      button1 = element("button");
      h42 = element("h4");
      t8 = text("Plataforma");
      t9 = space();
      button2 = element("button");
      h43 = element("h4");
      t10 = text("Video");
      t11 = space();
      button3 = element("button");
      h44 = element("h4");
      t12 = text("Guía");
      t13 = space();
      button4 = element("button");
      h45 = element("h4");
      t14 = text("Juegos");
      t15 = space();
      div4 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div5_nodes = children(div5);
      article = claim_element(div5_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Kit de herramientas");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Queremos que tengas este compilado con un poco de todo para habitar internet de forma segura, responsable y empática.");
      p_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      h40 = claim_element(div1_nodes, "H4", {
        class: true
      });
      var h40_nodes = children(h40);
      t4 = claim_text(h40_nodes, "ENCONTRÁ ArtÍculos, podcast, reflexiones, videos y más.");
      h40_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      button0 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      h41 = claim_element(button0_nodes, "H4", {});
      var h41_nodes = children(h41);
      t6 = claim_text(h41_nodes, "Artículo");
      h41_nodes.forEach(detach_dev);
      button0_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      button1 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      h42 = claim_element(button1_nodes, "H4", {});
      var h42_nodes = children(h42);
      t8 = claim_text(h42_nodes, "Plataforma");
      h42_nodes.forEach(detach_dev);
      button1_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      button2 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button2_nodes = children(button2);
      h43 = claim_element(button2_nodes, "H4", {});
      var h43_nodes = children(h43);
      t10 = claim_text(h43_nodes, "Video");
      h43_nodes.forEach(detach_dev);
      button2_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      button3 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button3_nodes = children(button3);
      h44 = claim_element(button3_nodes, "H4", {});
      var h44_nodes = children(h44);
      t12 = claim_text(h44_nodes, "Guía");
      h44_nodes.forEach(detach_dev);
      button3_nodes.forEach(detach_dev);
      t13 = claim_space(div3_nodes);
      button4 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button4_nodes = children(button4);
      h45 = claim_element(button4_nodes, "H4", {});
      var h45_nodes = children(h45);
      t14 = claim_text(h45_nodes, "Juegos");
      h45_nodes.forEach(detach_dev);
      button4_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t15 = claim_space(article_nodes);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div4_nodes);
      }

      div4_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "celeste-bg");
      add_location(span, file$d, 51, 58, 1437);
      attr_dev(h1, "class", "w-60 upercase text-black text-left\t");
      add_location(h1, file$d, 51, 10, 1389);
      attr_dev(div0, "class", "pt-10 sm:px-3 py-6 lg:p-8 flex ");
      add_location(div0, file$d, 49, 6, 1224);
      attr_dev(p, "class", "font-sans font-medium pb-3");
      add_location(p, file$d, 54, 8, 1594);
      attr_dev(h40, "class", "uppercase fushia-text pb-3");
      add_location(h40, file$d, 55, 8, 1762);
      attr_dev(div1, "class", "text-black flex flex-col justify-center text-left");
      add_location(div1, file$d, 53, 6, 1522);
      attr_dev(div2, "class", "grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 p-3 gap-8 mb-10 bg-white pb-10 sm:pb-0");
      add_location(div2, file$d, 47, 4, 1114);
      add_location(h41, file$d, 63, 8, 2067);
      attr_dev(button0, "class", "ml-5 px-5 text-2xl border-2 border-black");
      add_location(button0, file$d, 62, 6, 1960);
      add_location(h42, file$d, 66, 8, 2217);
      attr_dev(button1, "class", "ml-5 px-5 text-2xl border-2 border-black");
      add_location(button1, file$d, 65, 6, 2108);
      add_location(h43, file$d, 69, 8, 2364);
      attr_dev(button2, "class", "ml-5 px-5 text-2xl border-2 border-black");
      add_location(button2, file$d, 68, 6, 2260);
      add_location(h44, file$d, 72, 8, 2505);
      attr_dev(button3, "class", "ml-5 px-5 text-2xl border-2 border-black");
      add_location(button3, file$d, 71, 6, 2402);
      add_location(h45, file$d, 75, 8, 2646);
      attr_dev(button4, "class", "ml-5 px-5 text-2xl border-2 border-black");
      add_location(button4, file$d, 74, 6, 2542);
      attr_dev(div3, "class", "flex justify-evenly flex-wrap");
      add_location(div3, file$d, 60, 4, 1909);
      attr_dev(div4, "class", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10");
      add_location(div4, file$d, 79, 4, 2698);
      attr_dev(article, "class", "container mx-auto ");
      add_location(article, file$d, 45, 2, 1072);
      attr_dev(div5, "class", "md:p-10 pt-0 sm:pt-20 bg-white  svelte-fzyaxp");
      attr_dev(div5, "id", "kit-de-herramientas");
      add_location(div5, file$d, 43, 0, 996);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, article);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, h1);
      append_dev(h1, span);
      append_dev(span, t0);
      append_dev(div2, t1);
      append_dev(div2, div1);
      append_dev(div1, p);
      append_dev(p, t2);
      append_dev(div1, t3);
      append_dev(div1, h40);
      append_dev(h40, t4);
      append_dev(article, t5);
      append_dev(article, div3);
      append_dev(div3, button0);
      append_dev(button0, h41);
      append_dev(h41, t6);
      append_dev(div3, t7);
      append_dev(div3, button1);
      append_dev(button1, h42);
      append_dev(h42, t8);
      append_dev(div3, t9);
      append_dev(div3, button2);
      append_dev(button2, h43);
      append_dev(h43, t10);
      append_dev(div3, t11);
      append_dev(div3, button3);
      append_dev(button3, h44);
      append_dev(h44, t12);
      append_dev(div3, t13);
      append_dev(div3, button4);
      append_dev(button4, h45);
      append_dev(h45, t14);
      append_dev(article, t15);
      append_dev(article, div4);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div4, null);
      }

      current = true;

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*click_handler*/
        ctx[2], false, false, false), listen_dev(button1, "click",
        /*click_handler_1*/
        ctx[3], false, false, false), listen_dev(button2, "click",
        /*click_handler_2*/
        ctx[4], false, false, false), listen_dev(button3, "click",
        /*click_handler_3*/
        ctx[5], false, false, false), listen_dev(button4, "click",
        /*click_handler_4*/
        ctx[6], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*newKits*/
      1) {
        each_value =
        /*newKits*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div4, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$d($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("KitHerramientas", slots, []);
  var kits = []; // CHANGE ME FOR DEV, CHANGE ME FOR BUILD

  var googleSheetApiToken = "AIzaSyBoSX1oI8uSGr4dXC_Lsz81ilWREuW2VjM";
  var url = "https://sheets.googleapis.com/v4/spreadsheets/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/values/colombia?key=".concat(googleSheetApiToken);
  var newKits = [];
  axios.get(url).then(function (res) {
    kits = formatSpreadsheet(res.data.values);
    $$invalidate(0, newKits = kits);
  });

  var formatSpreadsheet = function formatSpreadsheet(data) {
    var theData = data.slice(1);
    var input = theData.map(function (obj) {
      return {
        title: obj[0],
        description: obj[2],
        url: obj[3],
        type: obj[5]
      };
    });
    return input;
  };

  function changeFilter(newFilter) {
    $$invalidate(0, newKits = kits.filter(function (kit) {
      return kit.type == newFilter;
    }));
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<KitHerramientas> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return changeFilter("ARTÍCULO");
  };

  var click_handler_1 = function click_handler_1() {
    return changeFilter("PLATAFORMA");
  };

  var click_handler_2 = function click_handler_2() {
    return changeFilter("VIDEO");
  };

  var click_handler_3 = function click_handler_3() {
    return changeFilter("GUÍA");
  };

  var click_handler_4 = function click_handler_4() {
    return changeFilter("JUEGO");
  };

  $$self.$capture_state = function () {
    return {
      axios: axios,
      Kit: Kit,
      kits: kits,
      googleSheetApiToken: googleSheetApiToken,
      url: url,
      newKits: newKits,
      formatSpreadsheet: formatSpreadsheet,
      changeFilter: changeFilter
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("kits" in $$props) kits = $$props.kits;
    if ("googleSheetApiToken" in $$props) googleSheetApiToken = $$props.googleSheetApiToken;
    if ("newKits" in $$props) $$invalidate(0, newKits = $$props.newKits);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [newKits, changeFilter, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4];
}

var KitHerramientas = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(KitHerramientas, _SvelteComponentDev);

  var _super = _createSuper$d(KitHerramientas);

  function KitHerramientas(options) {
    var _this;

    _classCallCheck(this, KitHerramientas);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$d, create_fragment$d, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "KitHerramientas",
      options: options,
      id: create_fragment$d.name
    });
    return _this;
  }

  return KitHerramientas;
}(SvelteComponentDev);

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$c = "src/components/QuienesSomos.svelte";

function create_fragment$c(ctx) {
  var section;
  var div15;
  var div2;
  var div0;
  var img0;
  var img0_src_value;
  var t0;
  var div1;
  var h1;
  var t1;
  var t2;
  var div14;
  var div13;
  var div7;
  var h20;
  var span0;
  var t3;
  var t4;
  var div3;
  var p0;
  var b0;
  var t5;
  var t6;
  var div6;
  var div4;
  var a0;
  var img1;
  var img1_src_value;
  var t7;
  var a1;
  var img2;
  var img2_src_value;
  var t8;
  var a2;
  var img3;
  var img3_src_value;
  var t9;
  var a3;
  var img4;
  var img4_src_value;
  var t10;
  var div5;
  var a4;
  var t11;
  var t12;
  var div9;
  var h21;
  var span1;
  var t13;
  var t14;
  var div8;
  var p1;
  var b1;
  var t15;
  var t16;
  var div12;
  var div10;
  var a5;
  var img5;
  var img5_src_value;
  var t17;
  var a6;
  var img6;
  var img6_src_value;
  var t18;
  var a7;
  var img7;
  var img7_src_value;
  var t19;
  var div11;
  var a8;
  var t20;
  var block = {
    c: function create() {
      section = element("section");
      div15 = element("div");
      div2 = element("div");
      div0 = element("div");
      img0 = element("img");
      t0 = space();
      div1 = element("div");
      h1 = element("h1");
      t1 = text("¿Quienes somos?");
      t2 = space();
      div14 = element("div");
      div13 = element("div");
      div7 = element("div");
      h20 = element("h2");
      span0 = element("span");
      t3 = text("Dip - detox Information project");
      t4 = space();
      div3 = element("div");
      p0 = element("p");
      b0 = element("b");
      t5 = text("DIP es un proyecto de alfabetización digital e informativa que usa las ciencias del comportamiento, la comunicación y la tecnología para ayudar a las personas y las organizaciones a desintoxicar los ambientes informacionales. Utilizamos nuestro método D.E.T.O.X para diseñar herramientas divertidas y fáciles de utilizar que empoderen a las personas frente a la desinformación.");
      t6 = space();
      div6 = element("div");
      div4 = element("div");
      a0 = element("a");
      img1 = element("img");
      t7 = space();
      a1 = element("a");
      img2 = element("img");
      t8 = space();
      a2 = element("a");
      img3 = element("img");
      t9 = space();
      a3 = element("a");
      img4 = element("img");
      t10 = space();
      div5 = element("div");
      a4 = element("a");
      t11 = text("NUESTRA PAGINA WEB");
      t12 = space();
      div9 = element("div");
      h21 = element("h2");
      span1 = element("span");
      t13 = text("Extituto de política abierta");
      t14 = space();
      div8 = element("div");
      p1 = element("p");
      b1 = element("b");
      t15 = text("Somos una organización enfocada en el fortalecimiento de liderazgos y procesos colectivos, así como en el diseño de herramientas y tecnologías de innovación política y democrática.");
      t16 = space();
      div12 = element("div");
      div10 = element("div");
      a5 = element("a");
      img5 = element("img");
      t17 = space();
      a6 = element("a");
      img6 = element("img");
      t18 = space();
      a7 = element("a");
      img7 = element("img");
      t19 = space();
      div11 = element("div");
      a8 = element("a");
      t20 = text("NUESTRA PAGINA WEB");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true,
        id: true
      });
      var section_nodes = children(section);
      div15 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      div2 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "¿Quienes somos?");
      h1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t2 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", {
        id: true,
        class: true
      });
      var div13_nodes = children(div13);
      div7 = claim_element(div13_nodes, "DIV", {});
      var div7_nodes = children(div7);
      h20 = claim_element(div7_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      span0 = claim_element(h20_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, "Dip - detox Information project");
      span0_nodes.forEach(detach_dev);
      h20_nodes.forEach(detach_dev);
      t4 = claim_space(div7_nodes);
      div3 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t5 = claim_text(b0_nodes, "DIP es un proyecto de alfabetización digital e informativa que usa las ciencias del comportamiento, la comunicación y la tecnología para ayudar a las personas y las organizaciones a desintoxicar los ambientes informacionales. Utilizamos nuestro método D.E.T.O.X para diseñar herramientas divertidas y fáciles de utilizar que empoderen a las personas frente a la desinformación.");
      b0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      a0 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a0_nodes = children(a0);
      img1 = claim_element(a0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a0_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      a1 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a1_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      a2 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a2_nodes = children(a2);
      img3 = claim_element(a2_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a2_nodes.forEach(detach_dev);
      t9 = claim_space(div4_nodes);
      a3 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a3_nodes = children(a3);
      img4 = claim_element(a3_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t10 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      a4 = claim_element(div5_nodes, "A", {
        href: true,
        class: true
      });
      var a4_nodes = children(a4);
      t11 = claim_text(a4_nodes, "NUESTRA PAGINA WEB");
      a4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t12 = claim_space(div13_nodes);
      div9 = claim_element(div13_nodes, "DIV", {
        id: true,
        class: true
      });
      var div9_nodes = children(div9);
      h21 = claim_element(div9_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      span1 = claim_element(h21_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t13 = claim_text(span1_nodes, "Extituto de política abierta");
      span1_nodes.forEach(detach_dev);
      h21_nodes.forEach(detach_dev);
      t14 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      p1 = claim_element(div8_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t15 = claim_text(b1_nodes, "Somos una organización enfocada en el fortalecimiento de liderazgos y procesos colectivos, así como en el diseño de herramientas y tecnologías de innovación política y democrática.");
      b1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t16 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div10 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      a5 = claim_element(div10_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a5_nodes = children(a5);
      img5 = claim_element(a5_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a5_nodes.forEach(detach_dev);
      t17 = claim_space(div10_nodes);
      a6 = claim_element(div10_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a6_nodes = children(a6);
      img6 = claim_element(a6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a6_nodes.forEach(detach_dev);
      t18 = claim_space(div10_nodes);
      a7 = claim_element(div10_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a7_nodes = children(a7);
      img7 = claim_element(a7_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a7_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      t19 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      a8 = claim_element(div11_nodes, "A", {
        href: true,
        class: true
      });
      var a8_nodes = children(a8);
      t20 = claim_text(a8_nodes, "NUESTRA PAGINA WEB");
      a8_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", " ");
      if (img0.src !== (img0_src_value = "favicon.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Ícono de una persona");
      add_location(img0, file$c, 6, 16, 387);
      attr_dev(div0, "class", "celeste-bg px-10 pb-3 pt-10 gap-10 sm:p-10 md:px-0 flex justify-start sm:justify-center items-center ");
      add_location(div0, file$c, 5, 12, 255);
      attr_dev(h1, "class", "upercase white-text");
      add_location(h1, file$c, 9, 16, 580);
      attr_dev(div1, "class", "col-span-2  my-auto flex flex-col sm:items-center md:items-start");
      add_location(div1, file$c, 8, 12, 485);
      attr_dev(div2, "class", "grid md:grid-cols-3 pb-10 sm:pb-0 celeste-bg sm:grid-cols-1  mb-10");
      add_location(div2, file$c, 3, 8, 161);
      attr_dev(span0, "class", " fushia-bg text-black px-8");
      add_location(span0, file$c, 20, 56, 1048);
      attr_dev(h20, "class", "fushia-text pb-3 uppercase");
      add_location(h20, file$c, 20, 16, 1008);
      add_location(b0, file$c, 23, 36, 1220);
      attr_dev(p0, "class", "pb-3");
      add_location(p0, file$c, 23, 20, 1204);
      attr_dev(div3, "class", "font-sans text-left");
      add_location(div3, file$c, 22, 16, 1150);
      attr_dev(img1, "class", "w-6 sm:w-8");
      if (img1.src !== (img1_src_value = "social-media-icons/facebook.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Logo de facebook");
      add_location(img1, file$c, 29, 98, 1912);
      attr_dev(a0, "href", "https://www.facebook.com/DetoxDip/");
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "class", "mr-3");
      add_location(a0, file$c, 29, 24, 1838);
      attr_dev(img2, "class", "w-6 sm:w-8");
      if (img2.src !== (img2_src_value = "social-media-icons/twitter.svg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Logo de twitter");
      add_location(img2, file$c, 30, 93, 2113);
      attr_dev(a1, "href", "https://twitter.com/detoxdip");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "class", "mr-3");
      add_location(a1, file$c, 30, 24, 2044);
      attr_dev(img3, "class", "w-6 sm:w-8");
      if (img3.src !== (img3_src_value = "social-media-icons/instagram.svg")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Logo de instagram");
      add_location(img3, file$c, 31, 121, 2339);
      attr_dev(a2, "href", "https://www.instagram.com/detoxdip/?utm_medium=copy_link");
      attr_dev(a2, "target", "_blank");
      attr_dev(a2, "class", "mr-3");
      add_location(a2, file$c, 31, 24, 2242);
      attr_dev(img4, "class", "w-6 sm:w-8");
      if (img4.src !== (img4_src_value = "social-media-icons/linkedin.svg")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "Logo de linkedin");
      add_location(img4, file$c, 32, 128, 2576);
      attr_dev(a3, "href", "https://www.linkedin.com/company/dip-detox-information-project/");
      attr_dev(a3, "target", "_blank");
      attr_dev(a3, "class", "mr-3");
      add_location(a3, file$c, 32, 24, 2472);
      attr_dev(div4, "class", "text-2xl flex justify-self-start celeste-bg mt-3 mb-6 h-8 ");
      add_location(div4, file$c, 28, 20, 1741);
      attr_dev(a4, "href", "https://somosdip.com");
      attr_dev(a4, "class", "py-2 px-2 border w-100 text-center border-gray-800 border-solid uppercase text-sm mb-3");
      add_location(a4, file$c, 36, 24, 2798);
      attr_dev(div5, "class", "p-4 justify-self-end");
      add_location(div5, file$c, 35, 20, 2739);
      attr_dev(div6, "class", "  grid grid-cols-2 justify-items-stretch");
      add_location(div6, file$c, 27, 16, 1666);
      add_location(div7, file$c, 19, 12, 986);
      attr_dev(span1, "class", " fushia-bg text-black px-8");
      add_location(span1, file$c, 45, 45, 3184);
      attr_dev(h21, "class", "fushia-text pb-3");
      add_location(h21, file$c, 45, 16, 3155);
      add_location(b1, file$c, 47, 37, 3354);
      attr_dev(p1, "class", "pb-3 ");
      add_location(p1, file$c, 47, 20, 3337);
      attr_dev(div8, "class", "font-sans text-left");
      add_location(div8, file$c, 46, 16, 3283);
      attr_dev(div9, "id", "quienes-somos-plataforma");
      attr_dev(div9, "class", " ");
      add_location(div9, file$c, 43, 12, 3084);
      attr_dev(img5, "class", "w-6 sm:w-8");
      if (img5.src !== (img5_src_value = "social-media-icons/facebook.svg")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "Logo de facebook");
      add_location(img5, file$c, 54, 93, 3863);
      attr_dev(a5, "href", "https://www.facebook.com/Extituto");
      attr_dev(a5, "target", "_blank");
      attr_dev(a5, "class", "mr-3");
      add_location(a5, file$c, 54, 20, 3790);
      attr_dev(img6, "class", "w-6 sm:w-8");
      if (img6.src !== (img6_src_value = "social-media-icons/twitter.svg")) attr_dev(img6, "src", img6_src_value);
      attr_dev(img6, "alt", "Logo de twitter");
      add_location(img6, file$c, 55, 89, 4060);
      attr_dev(a6, "href", "https://twitter.com/extituto");
      attr_dev(a6, "target", "_blank");
      attr_dev(a6, "class", "mr-3");
      add_location(a6, file$c, 55, 20, 3991);
      attr_dev(img7, "class", "w-6 sm:w-8");
      if (img7.src !== (img7_src_value = "social-media-icons/instagram.svg")) attr_dev(img7, "src", img7_src_value);
      attr_dev(img7, "alt", "Logo de instagram");
      add_location(img7, file$c, 56, 91, 4256);
      attr_dev(a7, "href", "https://instagram.com/extituto");
      attr_dev(a7, "target", "_blank");
      attr_dev(a7, "class", "mr-3");
      add_location(a7, file$c, 56, 20, 4185);
      attr_dev(div10, "class", "text-2xl flex justify-self-start celeste-bg mt-3 mb-6 h-8 ");
      add_location(div10, file$c, 53, 16, 3697);
      attr_dev(a8, "href", "https://www.extituto.org/");
      attr_dev(a8, "class", "py-2 px-2 border w-100 text-center border-gray-800 border-solid uppercase text-sm mb-3");
      add_location(a8, file$c, 60, 20, 4480);
      attr_dev(div11, "class", "p-4 justify-self-end");
      add_location(div11, file$c, 59, 16, 4425);
      attr_dev(div12, "class", "  grid grid-cols-2 justify-items-stretch");
      add_location(div12, file$c, 52, 12, 3626);
      attr_dev(div13, "id", "quienes-somos-der");
      attr_dev(div13, "class", "mb-10 ");
      add_location(div13, file$c, 18, 4, 930);
      attr_dev(div14, "class", "p-2 sm:p-0");
      add_location(div14, file$c, 17, 8, 901);
      attr_dev(div15, "class", "quienes-somos-container my-10 container mx-auto");
      add_location(div15, file$c, 1, 4, 82);
      attr_dev(section, "class", "quienes-somos-section sm:p-10 celeste-bg");
      attr_dev(section, "id", "quienes-somos");
      add_location(section, file$c, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div15);
      append_dev(div15, div2);
      append_dev(div2, div0);
      append_dev(div0, img0);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, h1);
      append_dev(h1, t1);
      append_dev(div15, t2);
      append_dev(div15, div14);
      append_dev(div14, div13);
      append_dev(div13, div7);
      append_dev(div7, h20);
      append_dev(h20, span0);
      append_dev(span0, t3);
      append_dev(div7, t4);
      append_dev(div7, div3);
      append_dev(div3, p0);
      append_dev(p0, b0);
      append_dev(b0, t5);
      append_dev(div7, t6);
      append_dev(div7, div6);
      append_dev(div6, div4);
      append_dev(div4, a0);
      append_dev(a0, img1);
      append_dev(div4, t7);
      append_dev(div4, a1);
      append_dev(a1, img2);
      append_dev(div4, t8);
      append_dev(div4, a2);
      append_dev(a2, img3);
      append_dev(div4, t9);
      append_dev(div4, a3);
      append_dev(a3, img4);
      append_dev(div6, t10);
      append_dev(div6, div5);
      append_dev(div5, a4);
      append_dev(a4, t11);
      append_dev(div13, t12);
      append_dev(div13, div9);
      append_dev(div9, h21);
      append_dev(h21, span1);
      append_dev(span1, t13);
      append_dev(div9, t14);
      append_dev(div9, div8);
      append_dev(div8, p1);
      append_dev(p1, b1);
      append_dev(b1, t15);
      append_dev(div13, t16);
      append_dev(div13, div12);
      append_dev(div12, div10);
      append_dev(div10, a5);
      append_dev(a5, img5);
      append_dev(div10, t17);
      append_dev(div10, a6);
      append_dev(a6, img6);
      append_dev(div10, t18);
      append_dev(div10, a7);
      append_dev(a7, img7);
      append_dev(div12, t19);
      append_dev(div12, div11);
      append_dev(div11, a8);
      append_dev(a8, t20);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$c($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("QuienesSomos", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<QuienesSomos> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var QuienesSomos = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(QuienesSomos, _SvelteComponentDev);

  var _super = _createSuper$c(QuienesSomos);

  function QuienesSomos(options) {
    var _this;

    _classCallCheck(this, QuienesSomos);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$c, create_fragment$c, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "QuienesSomos",
      options: options,
      id: create_fragment$c.name
    });
    return _this;
  }

  return QuienesSomos;
}(SvelteComponentDev);

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$b = "src/components/PedagogiaDigital.svelte";

function create_fragment$b(ctx) {
  var section;
  var article;
  var div5;
  var div1;
  var h1;
  var span0;
  var t0;
  var div0;
  var img0;
  var img0_src_value;
  var t1;
  var t2;
  var p0;
  var span1;
  var t3;
  var t4;
  var br;
  var t5;
  var t6;
  var div4;
  var div3;
  var div2;
  var img1;
  var img1_src_value;
  var t7;
  var h2;
  var t8;
  var t9;
  var p1;
  var t10;
  var block = {
    c: function create() {
      section = element("section");
      article = element("article");
      div5 = element("div");
      div1 = element("div");
      h1 = element("h1");
      span0 = element("span");
      t0 = text(" \n                    ¿POR QUÉ ES ");
      div0 = element("div");
      img0 = element("img");
      t1 = text(" NECESARIO ENTENDER NUESTRA MENTE?");
      t2 = space();
      p0 = element("p");
      span1 = element("span");
      t3 = text("La mente tiene mecanismos y atajos que muchas veces nos llevan a cometer errores.");
      t4 = space();
      br = element("br");
      t5 = text(" Conocer nuestra mente y hacer conciencia de nuestros sesgos nos permite tomar mejores decisiones y entender que el cambio social está dado desde nosotros. En el caso de la desinformación, nos permite ser menos vulnerables y poder generar impacto en las decisiones colectivas.");
      t6 = space();
      div4 = element("div");
      div3 = element("div");
      div2 = element("div");
      img1 = element("img");
      t7 = space();
      h2 = element("h2");
      t8 = text("Diseñamos una ruta para que entiendas tu mente y cómo puede afectar tu comportamiento en línea y redes sociales.");
      t9 = space();
      p1 = element("p");
      t10 = text("CLICK EN LA FLECHA PARA CONOCER LA RUTA");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      article = claim_element(section_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div5 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span0 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      span0_nodes.forEach(detach_dev);
      t0 = claim_text(h1_nodes, " \n                    ¿POR QUÉ ES ");
      div0 = claim_element(h1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      t1 = claim_text(h1_nodes, " NECESARIO ENTENDER NUESTRA MENTE?");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      span1 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "La mente tiene mecanismos y atajos que muchas veces nos llevan a cometer errores.");
      span1_nodes.forEach(detach_dev);
      t4 = claim_space(p0_nodes);
      br = claim_element(p0_nodes, "BR", {});
      t5 = claim_text(p0_nodes, " Conocer nuestra mente y hacer conciencia de nuestros sesgos nos permite tomar mejores decisiones y entender que el cambio social está dado desde nosotros. En el caso de la desinformación, nos permite ser menos vulnerables y poder generar impacto en las decisiones colectivas.");
      p0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      img1 = claim_element(div2_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      t7 = claim_space(div2_nodes);
      h2 = claim_element(div2_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t8 = claim_text(h2_nodes, "Diseñamos una ruta para que entiendas tu mente y cómo puede afectar tu comportamiento en línea y redes sociales.");
      h2_nodes.forEach(detach_dev);
      t9 = claim_space(div2_nodes);
      p1 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t10 = claim_text(p1_nodes, "CLICK EN LA FLECHA PARA CONOCER LA RUTA");
      p1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "fushia-text");
      add_location(span0, file$b, 34, 49, 713);
      if (img0.src !== (img0_src_value = "cerebri.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Ícono de cambio");
      attr_dev(img0, "class", "imgPart   mr-3 mt-4 svelte-1je8n9k");
      add_location(img0, file$b, 36, 24, 829);
      attr_dev(div0, "class", " relative");
      add_location(div0, file$b, 35, 32, 781);
      attr_dev(h1, "class", "verdeClaro-text mb-5");
      add_location(h1, file$b, 34, 16, 680);
      attr_dev(span1, "class", "fushia-text");
      add_location(span1, file$b, 41, 20, 1061);
      add_location(br, file$b, 42, 20, 1197);
      attr_dev(p0, "class", "font-sans text-white mb-5");
      add_location(p0, file$b, 40, 16, 1003);
      attr_dev(div1, "class", "my-auto  relative");
      add_location(div1, file$b, 32, 12, 615);
      if (img1.src !== (img1_src_value = "RUTA-17.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Ícono de cambio");
      attr_dev(img1, "class", "contImg mr-3 mt-4 svelte-1je8n9k");
      add_location(img1, file$b, 50, 24, 1714);
      attr_dev(h2, "class", "mb-3 fushia-text text-lg");
      add_location(h2, file$b, 51, 24, 1810);
      attr_dev(p1, "class", "font-sans celeste-text");
      add_location(p1, file$b, 52, 24, 1989);
      attr_dev(div2, "class", "");
      add_location(div2, file$b, 49, 20, 1675);
      attr_dev(div3, "class", "flex items-start mb-5");
      add_location(div3, file$b, 47, 16, 1598);
      attr_dev(div4, "class", "text-white flex flex-col max-h-434px");
      add_location(div4, file$b, 46, 12, 1531);
      attr_dev(div5, "class", "grid md:grid-cols-2 grid-cols-1 gap-8 mb-10 mt-14");
      add_location(div5, file$b, 30, 8, 526);
      attr_dev(article, "class", "container mx-auto py-10 px-2 sm:p-10 ");
      add_location(article, file$b, 29, 4, 462);
      attr_dev(section, "class", "pedagogias-digitales-section bg-gris     ");
      add_location(section, file$b, 28, 0, 398);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, article);
      append_dev(article, div5);
      append_dev(div5, div1);
      append_dev(div1, h1);
      append_dev(h1, span0);
      append_dev(h1, t0);
      append_dev(h1, div0);
      append_dev(div0, img0);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, p0);
      append_dev(p0, span1);
      append_dev(span1, t3);
      append_dev(p0, t4);
      append_dev(p0, br);
      append_dev(p0, t5);
      append_dev(div5, t6);
      append_dev(div5, div4);
      append_dev(div4, div3);
      append_dev(div3, div2);
      append_dev(div2, img1);
      append_dev(div2, t7);
      append_dev(div2, h2);
      append_dev(h2, t8);
      append_dev(div2, t9);
      append_dev(div2, p1);
      append_dev(p1, t10);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$b($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("PedagogiaDigital", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PedagogiaDigital> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var PedagogiaDigital = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PedagogiaDigital, _SvelteComponentDev);

  var _super = _createSuper$b(PedagogiaDigital);

  function PedagogiaDigital(options) {
    var _this;

    _classCallCheck(this, PedagogiaDigital);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$b, create_fragment$b, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PedagogiaDigital",
      options: options,
      id: create_fragment$b.name
    });
    return _this;
  }

  return PedagogiaDigital;
}(SvelteComponentDev);

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$a = "src/components/Footer.svelte";

function create_fragment$a(ctx) {
  var footer;
  var div3;
  var img0;
  var img0_src_value;
  var t0;
  var div2;
  var div1;
  var small;
  var t1;
  var t2;
  var div0;
  var img1;
  var img1_src_value;
  var t3;
  var img2;
  var img2_src_value;
  var t4;
  var img3;
  var img3_src_value;
  var t5;
  var ul;
  var li0;
  var a0;
  var t6;
  var t7;
  var li1;
  var a1;
  var t8;
  var t9;
  var li2;
  var a2;
  var t10;
  var t11;
  var li3;
  var a3;
  var t12;
  var t13;
  var li4;
  var a4;
  var t14;
  var t15;
  var p;
  var t16;
  var a5;
  var t17;
  var block = {
    c: function create() {
      footer = element("footer");
      div3 = element("div");
      img0 = element("img");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      small = element("small");
      t1 = text("Impulsado por:");
      t2 = space();
      div0 = element("div");
      img1 = element("img");
      t3 = space();
      img2 = element("img");
      t4 = space();
      img3 = element("img");
      t5 = space();
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t6 = text("Home");
      t7 = space();
      li1 = element("li");
      a1 = element("a");
      t8 = text("Entinede tu mente");
      t9 = space();
      li2 = element("li");
      a2 = element("a");
      t10 = text("kit de herramientas");
      t11 = space();
      li3 = element("li");
      a3 = element("a");
      t12 = text("#NoComoCuento");
      t13 = space();
      li4 = element("li");
      a4 = element("a");
      t14 = text("Quiénes Somos");
      t15 = space();
      p = element("p");
      t16 = text("Todos los materiales originales están bajo una licencia de \n    ");
      a5 = element("a");
      t17 = text("Creative Commons Reconocimiento 4.0 Internacional.");
      this.h();
    },
    l: function claim(nodes) {
      footer = claim_element(nodes, "FOOTER", {
        class: true
      });
      var footer_nodes = children(footer);
      div3 = claim_element(footer_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      img0 = claim_element(div3_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      small = claim_element(div1_nodes, "SMALL", {
        class: true
      });
      var small_nodes = children(small);
      t1 = claim_text(small_nodes, "Impulsado por:");
      small_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img1 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t3 = claim_space(div0_nodes);
      img2 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t4 = claim_space(div0_nodes);
      img3 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      ul = claim_element(div3_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        class: true,
        href: true
      });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t7 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t8 = claim_text(a1_nodes, "Entinede tu mente");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t9 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", {
        class: true,
        href: true
      });
      var a2_nodes = children(a2);
      t10 = claim_text(a2_nodes, "kit de herramientas");
      a2_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t11 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        class: true,
        href: true
      });
      var a3_nodes = children(a3);
      t12 = claim_text(a3_nodes, "#NoComoCuento");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t13 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      a4 = claim_element(li4_nodes, "A", {
        class: true,
        href: true
      });
      var a4_nodes = children(a4);
      t14 = claim_text(a4_nodes, "Quiénes Somos");
      a4_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t15 = claim_space(footer_nodes);
      p = claim_element(footer_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t16 = claim_text(p_nodes, "Todos los materiales originales están bajo una licencia de \n    ");
      a5 = claim_element(p_nodes, "A", {
        class: true,
        href: true,
        target: true
      });
      var a5_nodes = children(a5);
      t17 = claim_text(a5_nodes, "Creative Commons Reconocimiento 4.0 Internacional.");
      a5_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      footer_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "mt-5 w-32 sm:w-40 my-auto");
      if (img0.src !== (img0_src_value = "logo-circular.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Logo de Corazones y mentes");
      add_location(img0, file$a, 16, 6, 253);
      attr_dev(small, "class", "text-xs mb-3");
      add_location(small, file$a, 19, 10, 465);
      attr_dev(img1, "class", "md:w-40 sm:w-72\t");
      if (img1.src !== (img1_src_value = "Logo_DIP_horizontal.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Logo DIP - detox information project");
      add_location(img1, file$a, 21, 12, 584);
      attr_dev(img2, "class", "md:w-40 sm:w-72\t");
      if (img2.src !== (img2_src_value = "LOGO_EXTITUTO-11.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Logo de Extituto");
      add_location(img2, file$a, 22, 12, 702);
      attr_dev(img3, "class", "w-40 col-span-2 sm:w-72\t");
      if (img3.src !== (img3_src_value = "developers2.png")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Logos de Democracia en Red, Plataforma democrática, Fundacion fhc centro edelstein");
      add_location(img3, file$a, 23, 12, 797);
      attr_dev(div0, "class", "grid grid-cols-2 sm:grid-cols-1");
      add_location(div0, file$a, 20, 10, 526);
      attr_dev(div1, "class", "w-80 flex flex-col justify-center align-center");
      add_location(div1, file$a, 18, 8, 394);
      attr_dev(div2, "class", "mt-4 sm:mx-10");
      add_location(div2, file$a, 17, 6, 358);
      attr_dev(a0, "class", "hover:underline");
      attr_dev(a0, "href", "#home");
      add_location(a0, file$a, 28, 12, 1085);
      add_location(li0, file$a, 28, 8, 1081);
      attr_dev(a1, "class", "hover:underline");
      attr_dev(a1, "href", "#libro");
      add_location(a1, file$a, 29, 12, 1151);
      add_location(li1, file$a, 29, 8, 1147);
      attr_dev(a2, "class", "hover:underline");
      attr_dev(a2, "href", "#kit-de-herramientas");
      add_location(a2, file$a, 30, 12, 1231);
      add_location(li2, file$a, 30, 8, 1227);
      attr_dev(a3, "class", "hover:underline");
      attr_dev(a3, "href", "#nocomocuento");
      add_location(a3, file$a, 31, 12, 1327);
      add_location(li3, file$a, 31, 8, 1323);
      attr_dev(a4, "class", "hover:underline");
      attr_dev(a4, "href", "#quienes-somos");
      add_location(a4, file$a, 32, 12, 1410);
      add_location(li4, file$a, 32, 8, 1406);
      attr_dev(ul, "class", "uppercase text-bold mt-5   text-center mx-auto sm:text-left");
      add_location(ul, file$a, 27, 6, 1000);
      attr_dev(div3, "class", "container mx-auto flex justify-between align-center flex-wrap");
      add_location(div3, file$a, 15, 2, 171);
      attr_dev(a5, "class", "text-xs");
      attr_dev(a5, "href", "https://creativecommons.org/licenses/by/4.0/deed.es");
      attr_dev(a5, "target", "_blank");
      add_location(a5, file$a, 36, 4, 1616);
      attr_dev(p, "class", "text-center text-xs text-bold mt-10");
      add_location(p, file$a, 35, 2, 1505);
      attr_dev(footer, "class", "bg-gray-200 py-20 px-3 ");
      add_location(footer, file$a, 14, 0, 128);
    },
    m: function mount(target, anchor) {
      insert_dev(target, footer, anchor);
      append_dev(footer, div3);
      append_dev(div3, img0);
      append_dev(div3, t0);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, small);
      append_dev(small, t1);
      append_dev(div1, t2);
      append_dev(div1, div0);
      append_dev(div0, img1);
      append_dev(div0, t3);
      append_dev(div0, img2);
      append_dev(div0, t4);
      append_dev(div0, img3);
      append_dev(div3, t5);
      append_dev(div3, ul);
      append_dev(ul, li0);
      append_dev(li0, a0);
      append_dev(a0, t6);
      append_dev(ul, t7);
      append_dev(ul, li1);
      append_dev(li1, a1);
      append_dev(a1, t8);
      append_dev(ul, t9);
      append_dev(ul, li2);
      append_dev(li2, a2);
      append_dev(a2, t10);
      append_dev(ul, t11);
      append_dev(ul, li3);
      append_dev(li3, a3);
      append_dev(a3, t12);
      append_dev(ul, t13);
      append_dev(ul, li4);
      append_dev(li4, a4);
      append_dev(a4, t14);
      append_dev(footer, t15);
      append_dev(footer, p);
      append_dev(p, t16);
      append_dev(p, a5);
      append_dev(a5, t17);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(footer);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$a($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Footer", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper$a(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$a, create_fragment$a, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$a.name
    });
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$9 = "src/components/Home.svelte";

function create_fragment$9(ctx) {
  var div3;
  var article;
  var img;
  var img_src_value;
  var t0;
  var div2;
  var div0;
  var h2;
  var span0;
  var t1;
  var t2;
  var p;
  var t3;
  var span1;
  var t4;
  var t5;
  var div1;
  var a;
  var span2;
  var t6;
  var block = {
    c: function create() {
      div3 = element("div");
      article = element("article");
      img = element("img");
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      h2 = element("h2");
      span0 = element("span");
      t1 = text("El internet es útil para todos, pero queremos que aprendas a usarlo para que saques lo mejor de él y no lo peor de ti.");
      t2 = space();
      p = element("p");
      t3 = text("Este es un espacio con herramientas e información que se estará actualizando para activar la buena convivencia y el uso correcto de internet ");
      span1 = element("span");
      t4 = text("¡UNETE, Y CONOCE TU MENTE!");
      t5 = space();
      div1 = element("div");
      a = element("a");
      span2 = element("span");
      t6 = text("DESCARGAR LIBRO");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div3_nodes = children(div3);
      article = claim_element(div3_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      img = claim_element(article_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {});
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      span0 = claim_element(h2_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "El internet es útil para todos, pero queremos que aprendas a usarlo para que saques lo mejor de él y no lo peor de ti.");
      span0_nodes.forEach(detach_dev);
      h2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Este es un espacio con herramientas e información que se estará actualizando para activar la buena convivencia y el uso correcto de internet ");
      span1 = claim_element(p_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, "¡UNETE, Y CONOCE TU MENTE!");
      span1_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a_nodes = children(a);
      span2 = claim_element(a_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t6 = claim_text(span2_nodes, "DESCARGAR LIBRO");
      span2_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "logo-circular.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "w-52 sm:w-72 mx-auto mb-6");
      attr_dev(img, "alt", "Logo de Corazones y Mentes");
      add_location(img, file$9, 14, 2, 373);
      attr_dev(span0, "class", "celeste-bg");
      add_location(span0, file$9, 18, 5, 564);
      attr_dev(h2, "class", "rounded-sm sm:p-2 p-1 uppercase");
      add_location(h2, file$9, 17, 4, 514);
      attr_dev(div0, "class", "flex  p-2 mb-5");
      add_location(div0, file$9, 16, 3, 481);
      attr_dev(span1, "class", "uppercase font-normal staatiliches-font");
      add_location(span1, file$9, 30, 146, 1127);
      attr_dev(p, "class", "font-sans mx-4 md:mt-6 mb-2 text-lg svelte-12gybz8");
      add_location(p, file$9, 29, 3, 933);
      attr_dev(span2, "class", "fushia-bg py-2 px-1 border hover:border-gray-800 border-solid w-44 text-center text-white\t ippercase inline-block");
      add_location(span2, file$9, 34, 29, 1337);
      attr_dev(a, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a, "download", "");
      attr_dev(a, "class", "py-3 float-left");
      add_location(a, file$9, 33, 4, 1255);
      attr_dev(div1, "class", "flex mx-4");
      add_location(div1, file$9, 32, 3, 1227);
      add_location(div2, file$9, 15, 2, 472);
      attr_dev(article, "class", "grid grid-cols-1 md:grid-cols-2 items-center ");
      add_location(article, file$9, 13, 1, 307);
      attr_dev(div3, "class", "container mx-auto py-6 sm:py-24");
      attr_dev(div3, "id", "home");
      add_location(div3, file$9, 12, 0, 250);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, article);
      append_dev(article, img);
      append_dev(article, t0);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, h2);
      append_dev(h2, span0);
      append_dev(span0, t1);
      append_dev(div2, t2);
      append_dev(div2, p);
      append_dev(p, t3);
      append_dev(p, span1);
      append_dev(span1, t4);
      append_dev(div2, t5);
      append_dev(div2, div1);
      append_dev(div1, a);
      append_dev(a, span2);
      append_dev(span2, t6);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$9($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Home", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Home> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Home = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Home, _SvelteComponentDev);

  var _super = _createSuper$9(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Home",
      options: options,
      id: create_fragment$9.name
    });
    return _this;
  }

  return Home;
}(SvelteComponentDev);

var siema_min = createCommonjsModule(function (module, exports) {
  !function (e, t) {
    module.exports = t() ;
  }("undefined" != typeof self ? self : commonjsGlobal, function () {
    return function (e) {
      function t(r) {
        if (i[r]) return i[r].exports;
        var n = i[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
      }

      var i = {};
      return t.m = e, t.c = i, t.d = function (e, i, r) {
        t.o(e, i) || Object.defineProperty(e, i, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
      }, t.n = function (e) {
        var i = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        return t.d(i, "a", i), i;
      }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, t.p = "", t(t.s = 0);
    }([function (e, t, i) {

      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          s = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, i, r) {
          return i && e(t.prototype, i), r && e(t, r), t;
        };
      }(),
          l = function () {
        function e(t) {
          var i = this;
          if (r(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
          this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) {
            i[e] = i[e].bind(i);
          }), this.init();
        }

        return s(e, [{
          key: "attachEvents",
          value: function value() {
            window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null,
              preventClick: !1
            }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
          }
        }, {
          key: "detachEvents",
          value: function value() {
            window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
          }
        }, {
          key: "init",
          value: function value() {
            this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
          }
        }, {
          key: "buildSliderFrame",
          value: function value() {
            var e = this.selectorWidth / this.perPage,
                t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
            var i = document.createDocumentFragment();
            if (this.config.loop) for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
              var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
              i.appendChild(n);
            }

            for (var s = 0; s < this.innerElements.length; s++) {
              var l = this.buildSliderFrameItem(this.innerElements[s]);
              i.appendChild(l);
            }

            if (this.config.loop) for (var o = 0; o < this.perPage; o++) {
              var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
              i.appendChild(a);
            }
            this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
          }
        }, {
          key: "buildSliderFrameItem",
          value: function value(e) {
            var t = document.createElement("div");
            return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style.float = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
          }
        }, {
          key: "resolveSlidesNumber",
          value: function value() {
            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
              this.perPage = 1;

              for (var e in this.config.perPage) {
                window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
              }
            }
          }
        }, {
          key: "prev",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];

            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;

              if (this.config.loop) {
                if (this.currentSlide - e < 0) {
                  this.disableTransition();
                  var r = this.currentSlide + this.innerElements.length,
                      n = this.perPage,
                      s = r + n,
                      l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                      o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                  this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
                } else this.currentSlide = this.currentSlide - e;
              } else this.currentSlide = Math.max(this.currentSlide - e, 0);

              i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "next",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];

            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;

              if (this.config.loop) {
                if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                  this.disableTransition();
                  var r = this.currentSlide - this.innerElements.length,
                      n = this.perPage,
                      s = r + n,
                      l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                      o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                  this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
                } else this.currentSlide = this.currentSlide + e;
              } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);

              i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "disableTransition",
          value: function value() {
            this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
          }
        }, {
          key: "enableTransition",
          value: function value() {
            this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
          }
        }, {
          key: "goTo",
          value: function value(e, t) {
            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;
              this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "slideToCurrent",
          value: function value(e) {
            var t = this,
                i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
            e ? requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
              });
            }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
          }
        }, {
          key: "updateAfterDrag",
          value: function value() {
            var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
                t = Math.abs(e),
                i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
                r = e > 0 && this.currentSlide - i < 0,
                n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
            e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
          }
        }, {
          key: "resizeHandler",
          value: function value() {
            this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
          }
        }, {
          key: "clearDrag",
          value: function value() {
            this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null,
              preventClick: this.drag.preventClick
            };
          }
        }, {
          key: "touchstartHandler",
          value: function value(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
          }
        }, {
          key: "touchendHandler",
          value: function value(e) {
            e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
          }
        }, {
          key: "touchmoveHandler",
          value: function value(e) {
            if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
              e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
              var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                  i = t * (this.selectorWidth / this.perPage),
                  r = this.drag.endX - this.drag.startX,
                  n = this.config.rtl ? i + r : i - r;
              this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
            }
          }
        }, {
          key: "mousedownHandler",
          value: function value(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
          }
        }, {
          key: "mouseupHandler",
          value: function value(e) {
            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
          }
        }, {
          key: "mousemoveHandler",
          value: function value(e) {
            if (e.preventDefault(), this.pointerDown) {
              "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
              var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                  i = t * (this.selectorWidth / this.perPage),
                  r = this.drag.endX - this.drag.startX,
                  n = this.config.rtl ? i + r : i - r;
              this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
            }
          }
        }, {
          key: "mouseleaveHandler",
          value: function value(e) {
            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
          }
        }, {
          key: "clickHandler",
          value: function value(e) {
            this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
          }
        }, {
          key: "remove",
          value: function value(e, t) {
            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
            var i = e < this.currentSlide,
                r = this.currentSlide + this.perPage - 1 === e;
            (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
          }
        }, {
          key: "insert",
          value: function value(e, t, i) {
            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
            if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
            var r = t <= this.currentSlide > 0 && this.innerElements.length;
            this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
          }
        }, {
          key: "prepend",
          value: function value(e, t) {
            this.insert(e, 0), t && t.call(this);
          }
        }, {
          key: "append",
          value: function value(e, t) {
            this.insert(e, this.innerElements.length + 1), t && t.call(this);
          }
        }, {
          key: "destroy",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments[1];

            if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
              for (var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) {
                i.appendChild(this.innerElements[r]);
              }

              this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
            }

            t && t.call(this);
          }
        }], [{
          key: "mergeSettings",
          value: function value(e) {
            var t = {
              selector: ".siema",
              duration: 200,
              easing: "ease-out",
              perPage: 1,
              startIndex: 0,
              draggable: !0,
              multipleDrag: !0,
              threshold: 20,
              loop: !1,
              rtl: !1,
              onInit: function onInit() {},
              onChange: function onChange() {}
            },
                i = e;

            for (var r in i) {
              t[r] = i[r];
            }

            return t;
          }
        }, {
          key: "webkitOrNot",
          value: function value() {
            return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
          }
        }]), e;
      }();

      t.default = l, e.exports = t.default;
    }]);
  });
});
var Siema = /*@__PURE__*/getDefaultExportFromCjs(siema_min);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$8 = "node_modules/@beyonk/svelte-carousel/src/Carousel.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  child_ctx[33] = i;
  return child_ctx;
}

var get_right_control_slot_changes = function get_right_control_slot_changes(dirty) {
  return {};
};

var get_right_control_slot_context = function get_right_control_slot_context(ctx) {
  return {};
};

var get_left_control_slot_changes = function get_left_control_slot_changes(dirty) {
  return {};
};

var get_left_control_slot_context = function get_left_control_slot_context(ctx) {
  return {};
}; // (6:1) {#if controls}


function create_if_block_1(ctx) {
  var button0;
  var t;
  var button1;
  var current;
  var mounted;
  var dispose;
  var left_control_slot_template =
  /*#slots*/
  ctx[24]["left-control"];
  var left_control_slot = create_slot(left_control_slot_template, ctx,
  /*$$scope*/
  ctx[23], get_left_control_slot_context);
  var right_control_slot_template =
  /*#slots*/
  ctx[24]["right-control"];
  var right_control_slot = create_slot(right_control_slot_template, ctx,
  /*$$scope*/
  ctx[23], get_right_control_slot_context);
  var block = {
    c: function create() {
      button0 = element("button");
      if (left_control_slot) left_control_slot.c();
      t = space();
      button1 = element("button");
      if (right_control_slot) right_control_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button0 = claim_element(nodes, "BUTTON", {
        class: true,
        "aria-label": true
      });
      var button0_nodes = children(button0);
      if (left_control_slot) left_control_slot.l(button0_nodes);
      button0_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {
        class: true,
        "aria-label": true
      });
      var button1_nodes = children(button1);
      if (right_control_slot) right_control_slot.l(button1_nodes);
      button1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "left svelte-1s3wo8l");
      attr_dev(button0, "aria-label", "left");
      add_location(button0, file$8, 6, 1, 105);
      attr_dev(button1, "class", "right svelte-1s3wo8l");
      attr_dev(button1, "aria-label", "right");
      add_location(button1, file$8, 9, 1, 209);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button0, anchor);

      if (left_control_slot) {
        left_control_slot.m(button0, null);
      }

      insert_dev(target, t, anchor);
      insert_dev(target, button1, anchor);

      if (right_control_slot) {
        right_control_slot.m(button1, null);
      }

      current = true;

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*left*/
        ctx[3], false, false, false), listen_dev(button1, "click",
        /*right*/
        ctx[4], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (left_control_slot) {
        if (left_control_slot.p && dirty[0] &
        /*$$scope*/
        8388608) {
          update_slot(left_control_slot, left_control_slot_template, ctx,
          /*$$scope*/
          ctx[23], dirty, get_left_control_slot_changes, get_left_control_slot_context);
        }
      }

      if (right_control_slot) {
        if (right_control_slot.p && dirty[0] &
        /*$$scope*/
        8388608) {
          update_slot(right_control_slot, right_control_slot_template, ctx,
          /*$$scope*/
          ctx[23], dirty, get_right_control_slot_changes, get_right_control_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(left_control_slot, local);
      transition_in(right_control_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(left_control_slot, local);
      transition_out(right_control_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button0);
      if (left_control_slot) left_control_slot.d(detaching);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(button1);
      if (right_control_slot) right_control_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(6:1) {#if controls}",
    ctx: ctx
  });
  return block;
} // (14:4) {#if dots}


function create_if_block(ctx) {
  var ul;
  var each_value = {
    length:
    /*totalDots*/
    ctx[9]
  };
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(ul, "class", "svelte-1s3wo8l");
      add_location(ul, file$8, 14, 1, 339);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*isDotActive, currentIndex, go, currentPerPage, totalDots*/
      740) {
        each_value = {
          length:
          /*totalDots*/
          ctx[9]
        };
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(14:4) {#if dots}",
    ctx: ctx
  });
  return block;
} // (16:2) {#each {length: totalDots} as _, i}


function create_each_block(ctx) {
  var li;
  var li_class_value;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[26](
      /*i*/
      ctx[33])
    );
  }

  var block = {
    c: function create() {
      li = element("li");
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      children(li).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(li, "class", li_class_value = "" + (null_to_empty(
      /*isDotActive*/
      ctx[2](
      /*currentIndex*/
      ctx[7],
      /*i*/
      ctx[33]) ? "active" : "") + " svelte-1s3wo8l"));
      add_location(li, file$8, 16, 2, 384);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);

      if (!mounted) {
        dispose = listen_dev(li, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty[0] &
      /*currentIndex*/
      128 && li_class_value !== (li_class_value = "" + (null_to_empty(
      /*isDotActive*/
      ctx[2](
      /*currentIndex*/
      ctx[7],
      /*i*/
      ctx[33]) ? "active" : "") + " svelte-1s3wo8l"))) {
        attr_dev(li, "class", li_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(16:2) {#each {length: totalDots} as _, i}",
    ctx: ctx
  });
  return block;
}

function create_fragment$8(ctx) {
  var div1;
  var div0;
  var t0;
  var t1;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[24].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[23], null);
  var if_block0 =
  /*controls*/
  ctx[1] && create_if_block_1(ctx);
  var if_block1 =
  /*dots*/
  ctx[0] && create_if_block(ctx);
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div1_nodes);
      if (if_block0) if_block0.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      if (if_block1) if_block1.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "slides");
      add_location(div0, file$8, 2, 1, 25);
      attr_dev(div1, "class", "carousel svelte-1s3wo8l");
      add_location(div1, file$8, 1, 0, 1);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }
      /*div0_binding*/


      ctx[25](div0);
      append_dev(div1, t0);
      if (if_block0) if_block0.m(div1, null);
      append_dev(div1, t1);
      if (if_block1) if_block1.m(div1, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty[0] &
        /*$$scope*/
        8388608) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[23], dirty, null, null);
        }
      }

      if (
      /*controls*/
      ctx[1]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty[0] &
          /*controls*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*dots*/
      ctx[0]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if (default_slot) default_slot.d(detaching);
      /*div0_binding*/

      ctx[25](null);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$8($$self, $$props, $$invalidate) {
  var pips;
  var currentPerPage;
  var totalDots;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Carousel", slots, ['default', 'left-control', 'right-control']);
  var _$$props$perPage = $$props.perPage,
      perPage = _$$props$perPage === void 0 ? 3 : _$$props$perPage;
  var _$$props$loop = $$props.loop,
      loop = _$$props$loop === void 0 ? true : _$$props$loop;
  var _$$props$autoplay = $$props.autoplay,
      autoplay = _$$props$autoplay === void 0 ? 0 : _$$props$autoplay;
  var _$$props$duration = $$props.duration,
      duration = _$$props$duration === void 0 ? 200 : _$$props$duration;
  var _$$props$easing = $$props.easing,
      easing = _$$props$easing === void 0 ? "ease-out" : _$$props$easing;
  var _$$props$startIndex = $$props.startIndex,
      startIndex = _$$props$startIndex === void 0 ? 0 : _$$props$startIndex;
  var _$$props$draggable = $$props.draggable,
      draggable = _$$props$draggable === void 0 ? true : _$$props$draggable;
  var _$$props$multipleDrag = $$props.multipleDrag,
      multipleDrag = _$$props$multipleDrag === void 0 ? true : _$$props$multipleDrag;
  var _$$props$dots = $$props.dots,
      dots = _$$props$dots === void 0 ? true : _$$props$dots;
  var _$$props$controls = $$props.controls,
      controls = _$$props$controls === void 0 ? true : _$$props$controls;
  var _$$props$threshold = $$props.threshold,
      threshold = _$$props$threshold === void 0 ? 20 : _$$props$threshold;
  var _$$props$rtl = $$props.rtl,
      rtl = _$$props$rtl === void 0 ? false : _$$props$rtl;
  var currentIndex = startIndex;
  var siema;
  var controller;
  var timer;
  var dispatch = createEventDispatcher();
  onMount(function () {
    $$invalidate(22, controller = new Siema({
      selector: siema,
      perPage: _typeof(perPage) === "object" ? perPage : Number(perPage),
      loop: loop,
      duration: duration,
      easing: easing,
      startIndex: startIndex,
      draggable: draggable,
      multipleDrag: multipleDrag,
      threshold: threshold,
      rtl: rtl,
      onChange: handleChange
    }));

    if (autoplay) {
      timer = setInterval(right, autoplay);
    }

    return function () {
      autoplay && clearInterval(timer);
      controller.destroy();
    };
  });

  function isDotActive(currentIndex, dotIndex) {
    if (currentIndex < 0) currentIndex = pips.length + currentIndex;
    return currentIndex >= dotIndex * currentPerPage && currentIndex < dotIndex * currentPerPage + currentPerPage;
  }

  function left() {
    controller.prev();
  }

  function right() {
    controller.next();
  }

  function go(index) {
    controller.goTo(index);
  }

  function pause() {
    clearInterval(timer);
  }

  function resume() {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  }

  function handleChange(event) {
    $$invalidate(7, currentIndex = controller.currentSlide);
    dispatch("change", {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length
    });
  }

  var writable_props = ["perPage", "loop", "autoplay", "duration", "easing", "startIndex", "draggable", "multipleDrag", "dots", "controls", "threshold", "rtl"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Carousel> was created with unknown prop '".concat(key, "'"));
  });

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      siema = $$value;
      $$invalidate(8, siema);
    });
  }

  var click_handler = function click_handler(i) {
    return go(i * currentPerPage);
  };

  $$self.$$set = function ($$props) {
    if ("perPage" in $$props) $$invalidate(10, perPage = $$props.perPage);
    if ("loop" in $$props) $$invalidate(11, loop = $$props.loop);
    if ("autoplay" in $$props) $$invalidate(12, autoplay = $$props.autoplay);
    if ("duration" in $$props) $$invalidate(13, duration = $$props.duration);
    if ("easing" in $$props) $$invalidate(14, easing = $$props.easing);
    if ("startIndex" in $$props) $$invalidate(15, startIndex = $$props.startIndex);
    if ("draggable" in $$props) $$invalidate(16, draggable = $$props.draggable);
    if ("multipleDrag" in $$props) $$invalidate(17, multipleDrag = $$props.multipleDrag);
    if ("dots" in $$props) $$invalidate(0, dots = $$props.dots);
    if ("controls" in $$props) $$invalidate(1, controls = $$props.controls);
    if ("threshold" in $$props) $$invalidate(18, threshold = $$props.threshold);
    if ("rtl" in $$props) $$invalidate(19, rtl = $$props.rtl);
    if ("$$scope" in $$props) $$invalidate(23, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      Siema: Siema,
      onMount: onMount,
      createEventDispatcher: createEventDispatcher,
      perPage: perPage,
      loop: loop,
      autoplay: autoplay,
      duration: duration,
      easing: easing,
      startIndex: startIndex,
      draggable: draggable,
      multipleDrag: multipleDrag,
      dots: dots,
      controls: controls,
      threshold: threshold,
      rtl: rtl,
      currentIndex: currentIndex,
      siema: siema,
      controller: controller,
      timer: timer,
      dispatch: dispatch,
      isDotActive: isDotActive,
      left: left,
      right: right,
      go: go,
      pause: pause,
      resume: resume,
      handleChange: handleChange,
      pips: pips,
      currentPerPage: currentPerPage,
      totalDots: totalDots
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("perPage" in $$props) $$invalidate(10, perPage = $$props.perPage);
    if ("loop" in $$props) $$invalidate(11, loop = $$props.loop);
    if ("autoplay" in $$props) $$invalidate(12, autoplay = $$props.autoplay);
    if ("duration" in $$props) $$invalidate(13, duration = $$props.duration);
    if ("easing" in $$props) $$invalidate(14, easing = $$props.easing);
    if ("startIndex" in $$props) $$invalidate(15, startIndex = $$props.startIndex);
    if ("draggable" in $$props) $$invalidate(16, draggable = $$props.draggable);
    if ("multipleDrag" in $$props) $$invalidate(17, multipleDrag = $$props.multipleDrag);
    if ("dots" in $$props) $$invalidate(0, dots = $$props.dots);
    if ("controls" in $$props) $$invalidate(1, controls = $$props.controls);
    if ("threshold" in $$props) $$invalidate(18, threshold = $$props.threshold);
    if ("rtl" in $$props) $$invalidate(19, rtl = $$props.rtl);
    if ("currentIndex" in $$props) $$invalidate(7, currentIndex = $$props.currentIndex);
    if ("siema" in $$props) $$invalidate(8, siema = $$props.siema);
    if ("controller" in $$props) $$invalidate(22, controller = $$props.controller);
    if ("timer" in $$props) timer = $$props.timer;
    if ("pips" in $$props) pips = $$props.pips;
    if ("currentPerPage" in $$props) $$invalidate(6, currentPerPage = $$props.currentPerPage);
    if ("totalDots" in $$props) $$invalidate(9, totalDots = $$props.totalDots);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*controller*/
    4194304) {
      pips = controller ? controller.innerElements : [];
    }

    if ($$self.$$.dirty[0] &
    /*controller, perPage*/
    4195328) {
      $$invalidate(6, currentPerPage = controller ? controller.perPage : perPage);
    }

    if ($$self.$$.dirty[0] &
    /*controller, currentPerPage*/
    4194368) {
      $$invalidate(9, totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []);
    }
  };

  return [dots, controls, isDotActive, left, right, go, currentPerPage, currentIndex, siema, totalDots, perPage, loop, autoplay, duration, easing, startIndex, draggable, multipleDrag, threshold, rtl, pause, resume, controller, $$scope, slots, div0_binding, click_handler];
}

var Carousel = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Carousel, _SvelteComponentDev);

  var _super = _createSuper$8(Carousel);

  function Carousel(options) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {
      perPage: 10,
      loop: 11,
      autoplay: 12,
      duration: 13,
      easing: 14,
      startIndex: 15,
      draggable: 16,
      multipleDrag: 17,
      dots: 0,
      controls: 1,
      threshold: 18,
      rtl: 19,
      isDotActive: 2,
      left: 3,
      right: 4,
      go: 5,
      pause: 20,
      resume: 21
    }, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Carousel",
      options: options,
      id: create_fragment$8.name
    });
    return _this;
  }

  _createClass(Carousel, [{
    key: "perPage",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "loop",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "autoplay",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "duration",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "easing",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "startIndex",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "draggable",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "multipleDrag",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dots",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "controls",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "threshold",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "rtl",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "isDotActive",
    get: function get() {
      return this.$$.ctx[2];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "left",
    get: function get() {
      return this.$$.ctx[3];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "right",
    get: function get() {
      return this.$$.ctx[4];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "go",
    get: function get() {
      return this.$$.ctx[5];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "pause",
    get: function get() {
      return this.$$.ctx[20];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "resume",
    get: function get() {
      return this.$$.ctx[21];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Carousel;
}(SvelteComponentDev);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$7 = "src/components/SosDocenteHero.svelte";

function create_fragment$7(ctx) {
  var div4;
  var article;
  var img;
  var img_src_value;
  var t0;
  var div3;
  var div0;
  var h2;
  var t1;
  var t2;
  var div2;
  var p;
  var t3;
  var t4;
  var h30;
  var t5;
  var t6;
  var h31;
  var t7;
  var t8;
  var div1;
  var a;
  var span;
  var t9;
  var block = {
    c: function create() {
      div4 = element("div");
      article = element("article");
      img = element("img");
      t0 = space();
      div3 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t1 = text("¿Sos Docente?");
      t2 = space();
      div2 = element("div");
      p = element("p");
      t3 = text("Creemos en la educación como principal motor para generar un real impacto.\n                Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      t4 = space();
      h30 = element("h3");
      t5 = text("#TALLERES PEDAGÓGICOS");
      t6 = space();
      h31 = element("h3");
      t7 = text("#ACTIVIDADES");
      t8 = space();
      div1 = element("div");
      a = element("a");
      span = element("span");
      t9 = text("Soy Docente");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div4_nodes = children(div4);
      article = claim_element(div4_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      img = claim_element(article_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {});
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "¿Sos Docente?");
      h2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p = claim_element(div2_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Creemos en la educación como principal motor para generar un real impacto.\n                Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      p_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      h30 = claim_element(div2_nodes, "H3", {});
      var h30_nodes = children(h30);
      t5 = claim_text(h30_nodes, "#TALLERES PEDAGÓGICOS");
      h30_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      h31 = claim_element(div2_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t7 = claim_text(h31_nodes, "#ACTIVIDADES");
      h31_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      span = claim_element(a_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t9 = claim_text(span_nodes, "Soy Docente");
      span_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "w-52 sm:w-72 mx-auto mb-6");
      if (img.src !== (img_src_value = "sosdocente-hero.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Ícono de una persona");
      add_location(img, file$7, 2, 2, 139);
      attr_dev(h2, "class", "rounded-sm  p-1 uppercase");
      add_location(h2, file$7, 5, 4, 281);
      attr_dev(div0, "class", " fushia-bg p-2 mb-5");
      add_location(div0, file$7, 4, 3, 243);
      attr_dev(p, "class", "mb-3 font-sans");
      add_location(p, file$7, 10, 4, 384);
      add_location(h30, file$7, 12, 4, 605);
      attr_dev(h31, "class", "mb-3");
      add_location(h31, file$7, 13, 4, 641);
      attr_dev(span, "class", "fushia-bg py-2 px-5 border hover:border-gray-800 border-solid inline-block w-44 text-center ");
      add_location(span, file$7, 16, 36, 794);
      attr_dev(a, "href", "#sos-docente");
      attr_dev(a, "class", "py-3 float-right mt-3");
      add_location(a, file$7, 15, 5, 734);
      attr_dev(div1, "class", "flex justify-center sm:justify-end");
      add_location(div1, file$7, 14, 4, 680);
      attr_dev(div2, "class", "p-3");
      add_location(div2, file$7, 9, 3, 362);
      add_location(div3, file$7, 3, 2, 234);
      attr_dev(article, "class", "grid grid-cols-1 lg:grid-cols-2 md:mx-6 lg:mx-0 items-center");
      add_location(article, file$7, 1, 1, 58);
      attr_dev(div4, "class", "container mx-auto py-12 sm:py-24");
      attr_dev(div4, "id", "home");
      add_location(div4, file$7, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, article);
      append_dev(article, img);
      append_dev(article, t0);
      append_dev(article, div3);
      append_dev(div3, div0);
      append_dev(div0, h2);
      append_dev(h2, t1);
      append_dev(div3, t2);
      append_dev(div3, div2);
      append_dev(div2, p);
      append_dev(p, t3);
      append_dev(div2, t4);
      append_dev(div2, h30);
      append_dev(h30, t5);
      append_dev(div2, t6);
      append_dev(div2, h31);
      append_dev(h31, t7);
      append_dev(div2, t8);
      append_dev(div2, div1);
      append_dev(div1, a);
      append_dev(a, span);
      append_dev(span, t9);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$7($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("SosDocenteHero", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SosDocenteHero> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var SosDocenteHero = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SosDocenteHero, _SvelteComponentDev);

  var _super = _createSuper$7(SosDocenteHero);

  function SosDocenteHero(options) {
    var _this;

    _classCallCheck(this, SosDocenteHero);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SosDocenteHero",
      options: options,
      id: create_fragment$7.name
    });
    return _this;
  }

  return SosDocenteHero;
}(SvelteComponentDev);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$6 = "src/components/Banner.svelte";

function create_fragment$6(ctx) {
  var div;
  var img0;
  var img0_src_value;
  var t0;
  var img1;
  var img1_src_value;
  var t1;
  var img2;
  var img2_src_value;
  var t2;
  var a;
  var t3;
  var block = {
    c: function create() {
      div = element("div");
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      img2 = element("img");
      t2 = space();
      a = element("a");
      t3 = text("SUBÍ TU MEME");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img0 = claim_element(div_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(div_nodes);
      img1 = claim_element(div_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t1 = claim_space(div_nodes);
      img2 = claim_element(div_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t2 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", {
        href: true,
        class: true,
        target: true
      });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "SUBÍ TU MEME");
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img0.src !== (img0_src_value = "banner.jpg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "class", "hide-on-tablet svelte-rw96l0");
      attr_dev(img0, "alt", "Banner de la Campaña Se Voz");
      add_location(img0, file$6, 56, 4, 672);
      if (img1.src !== (img1_src_value = "banner-tablet.jpg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "class", "show-on-tablet svelte-rw96l0");
      attr_dev(img1, "alt", "Banner de la Campaña Se Voz");
      add_location(img1, file$6, 57, 4, 756);
      if (img2.src !== (img2_src_value = "banner-mobile.jpg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "class", "show-on-mobile svelte-rw96l0");
      attr_dev(img2, "alt", "Banner de la Campaña Se Voz");
      add_location(img2, file$6, 58, 4, 847);
      attr_dev(a, "href", "https://preguntarparaacordar.typeform.com/to/VTI9VF52");
      attr_dev(a, "class", "bg-black button-se-voz\ttext-yellow-200\t text-2xl py-2 px-4 absolute svelte-rw96l0");
      attr_dev(a, "target", "_blank");
      add_location(a, file$6, 59, 4, 938);
      attr_dev(div, "class", "banner relative svelte-rw96l0");
      add_location(div, file$6, 55, 0, 638);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, img0);
      append_dev(div, t0);
      append_dev(div, img1);
      append_dev(div, t1);
      append_dev(div, img2);
      append_dev(div, t2);
      append_dev(div, a);
      append_dev(a, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$6($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Banner", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Banner> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Banner = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Banner, _SvelteComponentDev);

  var _super = _createSuper$6(Banner);

  function Banner(options) {
    var _this;

    _classCallCheck(this, Banner);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Banner",
      options: options,
      id: create_fragment$6.name
    });
    return _this;
  }

  return Banner;
}(SvelteComponentDev);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$5 = "node_modules/svelte-feather-icons/src/icons/ChevronLeftIcon.svelte";

function create_fragment$5(ctx) {
  var svg;
  var polyline;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      polyline = svg_element("polyline");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      polyline = claim_element(svg_nodes, "polyline", {
        points: true
      }, 1);
      children(polyline).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(polyline, "points", "15 18 9 12 15 6");
      add_location(polyline, file$5, 13, 249, 535);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "width",
      /*size*/
      ctx[0]);
      attr_dev(svg, "height",
      /*size*/
      ctx[0]);
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "stroke", "currentColor");
      attr_dev(svg, "stroke-width",
      /*strokeWidth*/
      ctx[1]);
      attr_dev(svg, "stroke-linecap", "round");
      attr_dev(svg, "stroke-linejoin", "round");
      attr_dev(svg, "class", svg_class_value = "feather feather-chevron-left " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file$5, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, polyline);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "width",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "height",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*strokeWidth*/
      2) {
        attr_dev(svg, "stroke-width",
        /*strokeWidth*/
        ctx[1]);
      }

      if (dirty &
      /*customClass*/
      4 && svg_class_value !== (svg_class_value = "feather feather-chevron-left " +
      /*customClass*/
      ctx[2])) {
        attr_dev(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$5($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("ChevronLeftIcon", slots, []);
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "100%" : _$$props$size;
  var _$$props$strokeWidth = $$props.strokeWidth,
      strokeWidth = _$$props$strokeWidth === void 0 ? 2 : _$$props$strokeWidth;
  var _$$props$class = $$props.class,
      customClass = _$$props$class === void 0 ? "" : _$$props$class;

  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }

  var writable_props = ["size", "strokeWidth", "class"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ChevronLeftIcon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("class" in $$props) $$invalidate(2, customClass = $$props.class);
  };

  $$self.$capture_state = function () {
    return {
      size: size,
      strokeWidth: strokeWidth,
      customClass: customClass
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("customClass" in $$props) $$invalidate(2, customClass = $$props.customClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [size, strokeWidth, customClass];
}

var ChevronLeftIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ChevronLeftIcon, _SvelteComponentDev);

  var _super = _createSuper$5(ChevronLeftIcon);

  function ChevronLeftIcon(options) {
    var _this;

    _classCallCheck(this, ChevronLeftIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ChevronLeftIcon",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  _createClass(ChevronLeftIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<ChevronLeftIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronLeftIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<ChevronLeftIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronLeftIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ChevronLeftIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronLeftIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ChevronLeftIcon;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "node_modules/svelte-feather-icons/src/icons/ChevronRightIcon.svelte";

function create_fragment$4(ctx) {
  var svg;
  var polyline;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      polyline = svg_element("polyline");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      polyline = claim_element(svg_nodes, "polyline", {
        points: true
      }, 1);
      children(polyline).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(polyline, "points", "9 18 15 12 9 6");
      add_location(polyline, file$4, 13, 250, 536);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "width",
      /*size*/
      ctx[0]);
      attr_dev(svg, "height",
      /*size*/
      ctx[0]);
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "stroke", "currentColor");
      attr_dev(svg, "stroke-width",
      /*strokeWidth*/
      ctx[1]);
      attr_dev(svg, "stroke-linecap", "round");
      attr_dev(svg, "stroke-linejoin", "round");
      attr_dev(svg, "class", svg_class_value = "feather feather-chevron-right " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file$4, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, polyline);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "width",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "height",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*strokeWidth*/
      2) {
        attr_dev(svg, "stroke-width",
        /*strokeWidth*/
        ctx[1]);
      }

      if (dirty &
      /*customClass*/
      4 && svg_class_value !== (svg_class_value = "feather feather-chevron-right " +
      /*customClass*/
      ctx[2])) {
        attr_dev(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("ChevronRightIcon", slots, []);
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "100%" : _$$props$size;
  var _$$props$strokeWidth = $$props.strokeWidth,
      strokeWidth = _$$props$strokeWidth === void 0 ? 2 : _$$props$strokeWidth;
  var _$$props$class = $$props.class,
      customClass = _$$props$class === void 0 ? "" : _$$props$class;

  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }

  var writable_props = ["size", "strokeWidth", "class"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ChevronRightIcon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("class" in $$props) $$invalidate(2, customClass = $$props.class);
  };

  $$self.$capture_state = function () {
    return {
      size: size,
      strokeWidth: strokeWidth,
      customClass: customClass
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("customClass" in $$props) $$invalidate(2, customClass = $$props.customClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [size, strokeWidth, customClass];
}

var ChevronRightIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ChevronRightIcon, _SvelteComponentDev);

  var _super = _createSuper$4(ChevronRightIcon);

  function ChevronRightIcon(options) {
    var _this;

    _classCallCheck(this, ChevronRightIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ChevronRightIcon",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  _createClass(ChevronRightIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<ChevronRightIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronRightIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<ChevronRightIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronRightIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ChevronRightIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronRightIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ChevronRightIcon;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src/components/HeroSlider.svelte"; // (10:0) <Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >

function create_default_slot(ctx) {
  var div0;
  var pedagogiadigital0;
  var t0;
  var div1;
  var pedagogiadigital1;
  var t1;
  var div2;
  var pedagogiadigital2;
  var t2;
  var div3;
  var pedagogiadigital3;
  var t3;
  var div4;
  var pedagogiadigital4;
  var t4;
  var div5;
  var pedagogiadigital5;
  var t5;
  var div6;
  var pedagogiadigital6;
  var current;
  pedagogiadigital0 = new PedagogiaDigital({
    $$inline: true
  });
  pedagogiadigital1 = new PedagogiaDigital({
    $$inline: true
  });
  pedagogiadigital2 = new PedagogiaDigital({
    $$inline: true
  });
  pedagogiadigital3 = new PedagogiaDigital({
    $$inline: true
  });
  pedagogiadigital4 = new PedagogiaDigital({
    $$inline: true
  });
  pedagogiadigital5 = new PedagogiaDigital({
    $$inline: true
  });
  pedagogiadigital6 = new PedagogiaDigital({
    $$inline: true
  });
  var block = {
    c: function create() {
      div0 = element("div");
      create_component(pedagogiadigital0.$$.fragment);
      t0 = space();
      div1 = element("div");
      create_component(pedagogiadigital1.$$.fragment);
      t1 = space();
      div2 = element("div");
      create_component(pedagogiadigital2.$$.fragment);
      t2 = space();
      div3 = element("div");
      create_component(pedagogiadigital3.$$.fragment);
      t3 = space();
      div4 = element("div");
      create_component(pedagogiadigital4.$$.fragment);
      t4 = space();
      div5 = element("div");
      create_component(pedagogiadigital5.$$.fragment);
      t5 = space();
      div6 = element("div");
      create_component(pedagogiadigital6.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(pedagogiadigital0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(pedagogiadigital1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(pedagogiadigital2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(pedagogiadigital3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(pedagogiadigital4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      claim_component(pedagogiadigital5.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      claim_component(pedagogiadigital6.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "slide-content svelte-ng7ewl");
      add_location(div0, file$3, 13, 1, 476);
      attr_dev(div1, "class", "slide-content svelte-ng7ewl");
      add_location(div1, file$3, 16, 1, 553);
      attr_dev(div2, "class", "slide-content svelte-ng7ewl");
      add_location(div2, file$3, 19, 1, 630);
      attr_dev(div3, "class", "slide-content svelte-ng7ewl");
      add_location(div3, file$3, 22, 1, 707);
      attr_dev(div4, "class", "slide-content svelte-ng7ewl");
      add_location(div4, file$3, 25, 1, 784);
      attr_dev(div5, "class", "slide-content svelte-ng7ewl");
      add_location(div5, file$3, 28, 1, 861);
      attr_dev(div6, "class", "slide-content svelte-ng7ewl");
      add_location(div6, file$3, 31, 1, 938);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      mount_component(pedagogiadigital0, div0, null);
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      mount_component(pedagogiadigital1, div1, null);
      insert_dev(target, t1, anchor);
      insert_dev(target, div2, anchor);
      mount_component(pedagogiadigital2, div2, null);
      insert_dev(target, t2, anchor);
      insert_dev(target, div3, anchor);
      mount_component(pedagogiadigital3, div3, null);
      insert_dev(target, t3, anchor);
      insert_dev(target, div4, anchor);
      mount_component(pedagogiadigital4, div4, null);
      insert_dev(target, t4, anchor);
      insert_dev(target, div5, anchor);
      mount_component(pedagogiadigital5, div5, null);
      insert_dev(target, t5, anchor);
      insert_dev(target, div6, anchor);
      mount_component(pedagogiadigital6, div6, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(pedagogiadigital0.$$.fragment, local);
      transition_in(pedagogiadigital1.$$.fragment, local);
      transition_in(pedagogiadigital2.$$.fragment, local);
      transition_in(pedagogiadigital3.$$.fragment, local);
      transition_in(pedagogiadigital4.$$.fragment, local);
      transition_in(pedagogiadigital5.$$.fragment, local);
      transition_in(pedagogiadigital6.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(pedagogiadigital0.$$.fragment, local);
      transition_out(pedagogiadigital1.$$.fragment, local);
      transition_out(pedagogiadigital2.$$.fragment, local);
      transition_out(pedagogiadigital3.$$.fragment, local);
      transition_out(pedagogiadigital4.$$.fragment, local);
      transition_out(pedagogiadigital5.$$.fragment, local);
      transition_out(pedagogiadigital6.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      destroy_component(pedagogiadigital0);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      destroy_component(pedagogiadigital1);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div2);
      destroy_component(pedagogiadigital2);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div3);
      destroy_component(pedagogiadigital3);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(div4);
      destroy_component(pedagogiadigital4);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(div5);
      destroy_component(pedagogiadigital5);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(div6);
      destroy_component(pedagogiadigital6);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:0) <Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >",
    ctx: ctx
  });
  return block;
} // (11:1) 


function create_left_control_slot(ctx) {
  var span;
  var chevronlefticon;
  var current;
  chevronlefticon = new ChevronLeftIcon({
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(chevronlefticon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true,
        slot: true
      });
      var span_nodes = children(span);
      claim_component(chevronlefticon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "control arrow svelte-ng7ewl");
      attr_dev(span, "slot", "left-control");
      add_location(span, file$3, 10, 1, 393);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(chevronlefticon, span, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chevronlefticon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chevronlefticon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(chevronlefticon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_left_control_slot.name,
    type: "slot",
    source: "(11:1) ",
    ctx: ctx
  });
  return block;
} // (36:1) 


function create_right_control_slot(ctx) {
  var span;
  var chevronrighticon;
  var current;
  chevronrighticon = new ChevronRightIcon({
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(chevronrighticon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true,
        slot: true
      });
      var span_nodes = children(span);
      claim_component(chevronrighticon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "control arrow svelte-ng7ewl");
      attr_dev(span, "slot", "right-control");
      add_location(span, file$3, 35, 1, 1017);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(chevronrighticon, span, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chevronrighticon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chevronrighticon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(chevronrighticon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_right_control_slot.name,
    type: "slot",
    source: "(36:1) ",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var carousel;
  var current;
  carousel = new Carousel({
    props: {
      perPage: {
        800: 1,
        500: 1
      },
      duration: 500,
      $$slots: {
        "right-control": [create_right_control_slot],
        "left-control": [create_left_control_slot],
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(carousel.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(carousel.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(carousel, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var carousel_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        carousel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      carousel.$set(carousel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(carousel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(carousel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(carousel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("HeroSlider", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<HeroSlider> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Home: Home,
      Carousel: Carousel,
      SosDocenteHero: SosDocenteHero,
      Banner: Banner,
      ChevronLeftIcon: ChevronLeftIcon,
      ChevronRightIcon: ChevronRightIcon,
      PedagogiaDigital: PedagogiaDigital
    };
  };

  return [];
}

var HeroSlider = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(HeroSlider, _SvelteComponentDev);

  var _super = _createSuper$3(HeroSlider);

  function HeroSlider(options) {
    var _this;

    _classCallCheck(this, HeroSlider);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "HeroSlider",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return HeroSlider;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/components/SosDocente.svelte";

function create_fragment$2(ctx) {
  var section;
  var div9;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var t1;
  var t2;
  var h4;
  var t3;
  var br;
  var t4;
  var t5;
  var div8;
  var div3;
  var div2;
  var h20;
  var t6;
  var t7;
  var p0;
  var t8;
  var t9;
  var h30;
  var t10;
  var t11;
  var span0;
  var t12;
  var t13;
  var div5;
  var div4;
  var h21;
  var t14;
  var t15;
  var p1;
  var t16;
  var t17;
  var h31;
  var t18;
  var t19;
  var a0;
  var span1;
  var t20;
  var t21;
  var div7;
  var div6;
  var h22;
  var t22;
  var t23;
  var p2;
  var t24;
  var t25;
  var h32;
  var t26;
  var t27;
  var a1;
  var span2;
  var t28;
  var block = {
    c: function create() {
      section = element("section");
      div9 = element("div");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      t1 = text("¿Sos docente?");
      t2 = space();
      h4 = element("h4");
      t3 = text("Creemos en la educación como principal motor para generar un real impacto.\n                    ");
      br = element("br");
      t4 = text("\n                    Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      t5 = space();
      div8 = element("div");
      div3 = element("div");
      div2 = element("div");
      h20 = element("h2");
      t6 = text("Talleres pedagógicos");
      t7 = space();
      p0 = element("p");
      t8 = text("Organizamos encuentros para trabajar estrategias y herramientas pedagógicas sobre fake news y convivencia digital positiva para trabajar en el aula y debatir con lxs estudiantes.");
      t9 = space();
      h30 = element("h3");
      t10 = text("¿QUERÉS SUMARTE?");
      t11 = space();
      span0 = element("span");
      t12 = text("cupos agotados");
      t13 = space();
      div5 = element("div");
      div4 = element("div");
      h21 = element("h2");
      t14 = text("Actividades");
      t15 = space();
      p1 = element("p");
      t16 = text("Pensamos y creamos actividades para trabajar en el aula con lxs estudiantxs basadas en los capítulos del libro Corazones y Mentes, fuera y dentro de internet.");
      t17 = space();
      h31 = element("h3");
      t18 = text("¿QUERÉS PROBAR LAS ACTIVIDADES?");
      t19 = space();
      a0 = element("a");
      span1 = element("span");
      t20 = text("Descargar actividades");
      t21 = space();
      div7 = element("div");
      div6 = element("div");
      h22 = element("h2");
      t22 = text("Foro docente");
      t23 = space();
      p2 = element("p");
      t24 = text("Estamos creando un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre lxs jóvenes y en las aulas.");
      t25 = space();
      h32 = element("h3");
      t26 = text("¿QUERÉS SER PARTE?");
      t27 = space();
      a1 = element("a");
      span2 = element("span");
      t28 = text("Registrarme");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        id: true,
        class: true
      });
      var section_nodes = children(section);
      div9 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      div1 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "¿Sos docente?");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      h4 = claim_element(div1_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t3 = claim_text(h4_nodes, "Creemos en la educación como principal motor para generar un real impacto.\n                    ");
      br = claim_element(h4_nodes, "BR", {});
      t4 = claim_text(h4_nodes, "\n                    Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      h4_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div3 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h20 = claim_element(div2_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t6 = claim_text(h20_nodes, "Talleres pedagógicos");
      h20_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t8 = claim_text(p0_nodes, "Organizamos encuentros para trabajar estrategias y herramientas pedagógicas sobre fake news y convivencia digital positiva para trabajar en el aula y debatir con lxs estudiantes.");
      p0_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      h30 = claim_element(div3_nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t10 = claim_text(h30_nodes, "¿QUERÉS SUMARTE?");
      h30_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      span0 = claim_element(div3_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t12 = claim_text(span0_nodes, "cupos agotados");
      span0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t13 = claim_space(div8_nodes);
      div5 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h21 = claim_element(div4_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t14 = claim_text(h21_nodes, "Actividades");
      h21_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t15 = claim_space(div5_nodes);
      p1 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t16 = claim_text(p1_nodes, "Pensamos y creamos actividades para trabajar en el aula con lxs estudiantxs basadas en los capítulos del libro Corazones y Mentes, fuera y dentro de internet.");
      p1_nodes.forEach(detach_dev);
      t17 = claim_space(div5_nodes);
      h31 = claim_element(div5_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t18 = claim_text(h31_nodes, "¿QUERÉS PROBAR LAS ACTIVIDADES?");
      h31_nodes.forEach(detach_dev);
      t19 = claim_space(div5_nodes);
      a0 = claim_element(div5_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a0_nodes = children(a0);
      span1 = claim_element(a0_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t20 = claim_text(span1_nodes, "Descargar actividades");
      span1_nodes.forEach(detach_dev);
      a0_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t21 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      h22 = claim_element(div6_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t22 = claim_text(h22_nodes, "Foro docente");
      h22_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t23 = claim_space(div7_nodes);
      p2 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t24 = claim_text(p2_nodes, "Estamos creando un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre lxs jóvenes y en las aulas.");
      p2_nodes.forEach(detach_dev);
      t25 = claim_space(div7_nodes);
      h32 = claim_element(div7_nodes, "H3", {
        class: true
      });
      var h32_nodes = children(h32);
      t26 = claim_text(h32_nodes, "¿QUERÉS SER PARTE?");
      h32_nodes.forEach(detach_dev);
      t27 = claim_space(div7_nodes);
      a1 = claim_element(div7_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a1_nodes = children(a1);
      span2 = claim_element(a1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t28 = claim_text(span2_nodes, "Registrarme");
      span2_nodes.forEach(detach_dev);
      a1_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "mr-6 my-auto w-12 sm:w-16");
      if (img.src !== (img_src_value = "sos-docente.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Logo de una persona");
      add_location(img, file$2, 4, 16, 268);
      add_location(h1, file$2, 5, 16, 373);
      attr_dev(div0, "class", "fushia-bg sm:p-10 flex ");
      add_location(div0, file$2, 3, 12, 214);
      add_location(br, file$2, 9, 20, 585);
      attr_dev(h4, "class", "font-sans my-auto");
      add_location(h4, file$2, 7, 16, 439);
      attr_dev(div1, "class", "grid grid-cols-1 sm:grid-cols-2 fushia-bg sm:bg-white gap-8 mb-10 px-3 py-10 sm:p-0");
      add_location(div1, file$2, 2, 8, 104);
      attr_dev(h20, "class", "uppercase leading-9 text-black ");
      add_location(h20, file$2, 20, 20, 1063);
      attr_dev(div2, "class", "celeste-bg p-5 h-28 flex items-center w-full");
      add_location(div2, file$2, 19, 16, 984);
      attr_dev(p0, "class", "font-sans p-5 ");
      add_location(p0, file$2, 23, 16, 1189);
      attr_dev(h30, "class", "uppercase text-center black-text px-5 pb-5");
      add_location(h30, file$2, 26, 16, 1432);
      attr_dev(span0, "class", "py-2 px-5 border border-gray-800 border-solid");
      add_location(span0, file$2, 27, 15, 1525);
      attr_dev(div3, "class", "my-3 border border-solid border-gray-300 pb-5 flex flex-col justify-between items-center");
      add_location(div3, file$2, 17, 12, 864);
      attr_dev(h21, "class", "uppercase leading-9 text-black ");
      add_location(h21, file$2, 35, 20, 1872);
      attr_dev(div4, "class", "fushia-bg p-5 h-28 flex items-center w-full");
      add_location(div4, file$2, 34, 16, 1794);
      attr_dev(p1, "class", "font-sans p-5");
      add_location(p1, file$2, 38, 16, 2005);
      attr_dev(h31, "class", "uppercase text-center black-text px-5 pb-5");
      add_location(h31, file$2, 40, 16, 2210);
      attr_dev(span1, "class", " py-2 px-5 border border-gray-800 border-solid");
      add_location(span1, file$2, 43, 19, 2450);
      attr_dev(a0, "href", "https://drive.google.com/file/d/1ZpCo3Kx5Og0I7tnBVIEElxa1bIkp5MEe/view");
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "class", "py-3");
      add_location(a0, file$2, 42, 15, 2334);
      attr_dev(div5, "class", "my-3 border border-solid border-gray-300  pb-5 flex flex-col justify-between items-center");
      add_location(div5, file$2, 32, 12, 1673);
      attr_dev(h22, "class", "uppercase leading-9 text-white");
      add_location(h22, file$2, 52, 20, 2802);
      attr_dev(div6, "class", "bg-black p-5 h-28 flex items-center w-full");
      add_location(div6, file$2, 51, 16, 2725);
      attr_dev(p2, "class", "font-sans p-5");
      add_location(p2, file$2, 56, 16, 2956);
      attr_dev(h32, "class", "uppercase text-center px-5 pb-5");
      add_location(h32, file$2, 59, 16, 3215);
      attr_dev(span2, "class", " py-2 px-5 border border-gray-800 border-solid");
      add_location(span2, file$2, 62, 19, 3399);
      attr_dev(a1, "href", "https://preguntarparaacordar.typeform.com/to/abLtziWm");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "class", "py-3");
      add_location(a1, file$2, 61, 16, 3300);
      attr_dev(div7, "class", "my-3 border border-solid  border-gray-300 pb-5 flex flex-col justify-between items-center");
      add_location(div7, file$2, 49, 12, 2604);
      attr_dev(div8, "class", "px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-3 gap-4");
      add_location(div8, file$2, 15, 8, 773);
      attr_dev(div9, "class", "container mx-auto my-10");
      add_location(div9, file$2, 1, 4, 58);
      attr_dev(section, "id", "sos-docente");
      attr_dev(section, "class", "px-0 py-10 sm:p-10");
      add_location(section, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div9);
      append_dev(div9, div1);
      append_dev(div1, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, h4);
      append_dev(h4, t3);
      append_dev(h4, br);
      append_dev(h4, t4);
      append_dev(div9, t5);
      append_dev(div9, div8);
      append_dev(div8, div3);
      append_dev(div3, div2);
      append_dev(div2, h20);
      append_dev(h20, t6);
      append_dev(div3, t7);
      append_dev(div3, p0);
      append_dev(p0, t8);
      append_dev(div3, t9);
      append_dev(div3, h30);
      append_dev(h30, t10);
      append_dev(div3, t11);
      append_dev(div3, span0);
      append_dev(span0, t12);
      append_dev(div8, t13);
      append_dev(div8, div5);
      append_dev(div5, div4);
      append_dev(div4, h21);
      append_dev(h21, t14);
      append_dev(div5, t15);
      append_dev(div5, p1);
      append_dev(p1, t16);
      append_dev(div5, t17);
      append_dev(div5, h31);
      append_dev(h31, t18);
      append_dev(div5, t19);
      append_dev(div5, a0);
      append_dev(a0, span1);
      append_dev(span1, t20);
      append_dev(div8, t21);
      append_dev(div8, div7);
      append_dev(div7, div6);
      append_dev(div6, h22);
      append_dev(h22, t22);
      append_dev(div7, t23);
      append_dev(div7, p2);
      append_dev(p2, t24);
      append_dev(div7, t25);
      append_dev(div7, h32);
      append_dev(h32, t26);
      append_dev(div7, t27);
      append_dev(div7, a1);
      append_dev(a1, span2);
      append_dev(span2, t28);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("SosDocente", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SosDocente> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var SosDocente = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SosDocente, _SvelteComponentDev);

  var _super = _createSuper$2(SosDocente);

  function SosDocente(options) {
    var _this;

    _classCallCheck(this, SosDocente);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SosDocente",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return SosDocente;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/nocomocuento.svelte";

function create_fragment$1(ctx) {
  var section;
  var article;
  var div7;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div1;
  var p0;
  var t1;
  var span;
  var t2;
  var t3;
  var t4;
  var p1;
  var t5;
  var t6;
  var a;
  var t7;
  var t8;
  var div3;
  var p2;
  var t9;
  var t10;
  var div6;
  var div4;
  var iframe0;
  var iframe0_src_value;
  var t11;
  var div5;
  var iframe1;
  var iframe1_src_value;
  var block = {
    c: function create() {
      section = element("section");
      article = element("article");
      div7 = element("div");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div1 = element("div");
      p0 = element("p");
      t1 = text("NO COMO CUENTO es un brazo de DIP - ");
      span = element("span");
      t2 = text("detox information project");
      t3 = text(", que hace pedagogía digital utilizando las ciencias del comportamiento para reducir la vulnerabilidad frente a la desinformación");
      t4 = space();
      p1 = element("p");
      t5 = text("Postula a tu colegio para ser un espacio #NoComoCuento");
      t6 = space();
      a = element("a");
      t7 = text("REGISTRO DE MI COLEGIO");
      t8 = space();
      div3 = element("div");
      p2 = element("p");
      t9 = text("pedagogía frente a la desinformación");
      t10 = space();
      div6 = element("div");
      div4 = element("div");
      iframe0 = element("iframe");
      t11 = space();
      div5 = element("div");
      iframe1 = element("iframe");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      article = claim_element(section_nodes, "ARTICLE", {
        id: true,
        class: true
      });
      var article_nodes = children(article);
      div7 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div2 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "NO COMO CUENTO es un brazo de DIP - ");
      span = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "detox information project");
      span_nodes.forEach(detach_dev);
      t3 = claim_text(p0_nodes, ", que hace pedagogía digital utilizando las ciencias del comportamiento para reducir la vulnerabilidad frente a la desinformación");
      p0_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "Postula a tu colegio para ser un espacio #NoComoCuento");
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      a = claim_element(div1_nodes, "A", {
        href: true,
        class: true,
        alt: true
      });
      var a_nodes = children(a);
      t7 = claim_text(a_nodes, "REGISTRO DE MI COLEGIO");
      a_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(div7_nodes);
      div3 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p2 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "pedagogía frente a la desinformación");
      p2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t10 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", {});
      var div4_nodes = children(div4);
      iframe0 = claim_element(div4_nodes, "IFRAME", {
        width: true,
        height: true,
        src: true,
        title: true,
        frameborder: true,
        allow: true,
        allowfullscreen: true
      });
      children(iframe0).forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t11 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {});
      var div5_nodes = children(div5);
      iframe1 = claim_element(div5_nodes, "IFRAME", {
        width: true,
        height: true,
        src: true,
        title: true,
        frameborder: true,
        allow: true,
        allowfullscreen: true
      });
      children(iframe1).forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "nocomocuenta.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "max-h-330px max-w-xs  md:object-scale-down ");
      attr_dev(img, "alt", "imagen: no como cuenta ");
      add_location(img, file$1, 6, 20, 331);
      attr_dev(div0, "class", "flex-initial");
      add_location(div0, file$1, 5, 16, 284);
      attr_dev(span, "class", "parraf-bg svelte-dbzqdc");
      add_location(span, file$1, 11, 60, 632);
      attr_dev(p0, "class", "parraf pl-5 pb-1 text-2xl svelte-dbzqdc");
      add_location(p0, file$1, 10, 20, 534);
      attr_dev(p1, "class", "fushia-text pl-5 pb-1 text-2xl");
      add_location(p1, file$1, 13, 20, 864);
      attr_dev(a, "href", "#");
      attr_dev(a, "class", "ml-5 px-5 text-2xl border-2 border-black");
      attr_dev(a, "alt", "link registro de mi colegio");
      add_location(a, file$1, 16, 20, 1032);
      attr_dev(div1, "class", "container  pt-1.5");
      add_location(div1, file$1, 9, 16, 482);
      attr_dev(div2, "class", "sm:flex-none md:flex sm:col-span-1 md:col-span-3");
      add_location(div2, file$1, 4, 12, 205);
      attr_dev(p2, "class", "mx-auto my-10 px-5 text-black  parraf parrafBG text-3xl  svelte-dbzqdc");
      add_location(p2, file$1, 20, 16, 1261);
      attr_dev(div3, "class", "md:col-span-3 mx-auto");
      add_location(div3, file$1, 19, 12, 1209);
      attr_dev(iframe0, "width", "480");
      attr_dev(iframe0, "height", "280");
      if (iframe0.src !== (iframe0_src_value = "https://www.youtube.com/embed/8nXqcugV2Y4?controls=0")) attr_dev(iframe0, "src", iframe0_src_value);
      attr_dev(iframe0, "title", "YouTube video player");
      attr_dev(iframe0, "frameborder", "0");
      attr_dev(iframe0, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe0.allowFullscreen = true;
      add_location(iframe0, file$1, 27, 20, 1538);
      add_location(div4, file$1, 26, 16, 1512);
      attr_dev(iframe1, "width", "480");
      attr_dev(iframe1, "height", "280");
      if (iframe1.src !== (iframe1_src_value = "https://www.youtube.com/embed/8nXqcugV2Y4?controls=0")) attr_dev(iframe1, "src", iframe1_src_value);
      attr_dev(iframe1, "title", "YouTube video player");
      attr_dev(iframe1, "frameborder", "0");
      attr_dev(iframe1, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe1.allowFullscreen = true;
      add_location(iframe1, file$1, 31, 20, 1864);
      add_location(div5, file$1, 30, 16, 1838);
      attr_dev(div6, "class", " md:col-span-3 flex flex-wrap  space-x-2 ");
      add_location(div6, file$1, 25, 12, 1440);
      attr_dev(div7, "class", "grid sm:grid-cols-1 md:grid-cols-3 mx-auto");
      add_location(div7, file$1, 3, 8, 136);
      attr_dev(article, "id", "nocomocuento");
      attr_dev(article, "class", "sm:px-0 md:p-10 md:px-14 container-fluid w-auto mx-auto  bg-white ");
      add_location(article, file$1, 1, 3, 16);
      add_location(section, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, article);
      append_dev(article, div7);
      append_dev(div7, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, p0);
      append_dev(p0, t1);
      append_dev(p0, span);
      append_dev(span, t2);
      append_dev(p0, t3);
      append_dev(div1, t4);
      append_dev(div1, p1);
      append_dev(p1, t5);
      append_dev(div1, t6);
      append_dev(div1, a);
      append_dev(a, t7);
      append_dev(div7, t8);
      append_dev(div7, div3);
      append_dev(div3, p2);
      append_dev(p2, t9);
      append_dev(div7, t10);
      append_dev(div7, div6);
      append_dev(div6, div4);
      append_dev(div4, iframe0);
      append_dev(div6, t11);
      append_dev(div6, div5);
      append_dev(div5, iframe1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Nocomocuento", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Nocomocuento> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Nocomocuento = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Nocomocuento, _SvelteComponentDev);

  var _super = _createSuper$1(Nocomocuento);

  function Nocomocuento(options) {
    var _this;

    _classCallCheck(this, Nocomocuento);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Nocomocuento",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Nocomocuento;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var link0;
  var link1;
  var script;
  var script_src_value;
  var t0;
  var home;
  var t1;
  var heroslider;
  var t2;
  var nocomocuento;
  var t3;
  var articulo;
  var t4;
  var kitherramientas;
  var t5;
  var quienessomos;
  var t6;
  var footer;
  var current;
  home = new Home({
    $$inline: true
  });
  heroslider = new HeroSlider({
    $$inline: true
  });
  nocomocuento = new Nocomocuento({
    $$inline: true
  });
  articulo = new Articulo({
    $$inline: true
  });
  kitherramientas = new KitHerramientas({
    $$inline: true
  });
  quienessomos = new QuienesSomos({
    $$inline: true
  });
  footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      link0 = element("link");
      link1 = element("link");
      script = element("script");
      t0 = space();
      create_component(home.$$.fragment);
      t1 = space();
      create_component(heroslider.$$.fragment);
      t2 = space();
      create_component(nocomocuento.$$.fragment);
      t3 = space();
      create_component(articulo.$$.fragment);
      t4 = space();
      create_component(kitherramientas.$$.fragment);
      t5 = space();
      create_component(quienessomos.$$.fragment);
      t6 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1oxs1s6\"]", document.head);
      link0 = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true
      });
      link1 = claim_element(head_nodes, "LINK", {
        href: true,
        rel: true
      });
      script = claim_element(head_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script_nodes = children(script);
      script_nodes.forEach(detach_dev);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(home.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(heroslider.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(nocomocuento.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(articulo.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(kitherramientas.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(quienessomos.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Corazones Y Mentes";
      attr_dev(link0, "rel", "preconnect");
      attr_dev(link0, "href", "https://fonts.gstatic.com");
      add_location(link0, file, 24, 1, 990);
      attr_dev(link1, "href", "https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
      attr_dev(link1, "rel", "stylesheet");
      add_location(link1, file, 25, 1, 1048);
      script.async = true;
      if (script.src !== (script_src_value = "https://www.googletagmanager.com/gtag/js?id=G-LJWHDC5L57")) attr_dev(script, "src", script_src_value);
      add_location(script, file, 26, 1, 1146);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, link0);
      append_dev(document.head, link1);
      append_dev(document.head, script);
      insert_dev(target, t0, anchor);
      mount_component(home, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(heroslider, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(nocomocuento, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(articulo, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(kitherramientas, target, anchor);
      insert_dev(target, t5, anchor);
      mount_component(quienessomos, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(home.$$.fragment, local);
      transition_in(heroslider.$$.fragment, local);
      transition_in(nocomocuento.$$.fragment, local);
      transition_in(articulo.$$.fragment, local);
      transition_in(kitherramientas.$$.fragment, local);
      transition_in(quienessomos.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(home.$$.fragment, local);
      transition_out(heroslider.$$.fragment, local);
      transition_out(nocomocuento.$$.fragment, local);
      transition_out(articulo.$$.fragment, local);
      transition_out(kitherramientas.$$.fragment, local);
      transition_out(quienessomos.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(link0);
      detach_dev(link1);
      detach_dev(script);
      if (detaching) detach_dev(t0);
      destroy_component(home, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(heroslider, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(nocomocuento, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(articulo, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(kitherramientas, detaching);
      if (detaching) detach_dev(t5);
      destroy_component(quienessomos, detaching);
      if (detaching) detach_dev(t6);
      destroy_component(footer, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  onMount(function () {
    //Global site tag (gtag.js) - Google Analytics 
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-LJWHDC5L57");
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      TodaLaData: Todaladata,
      Articulo: Articulo,
      ForoDocente: ForoDocente,
      KitHerramientas: KitHerramientas,
      QuienesSomos: QuienesSomos,
      PedagogiaDigital: PedagogiaDigital,
      Footer: Footer,
      HeroSlider: HeroSlider,
      onMount: onMount,
      SosDocente: SosDocente,
      Home: Home,
      Nocomocuento: Nocomocuento
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
