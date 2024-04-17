import { inject as p, ref as g, reactive as m, defineAsyncComponent as d, renderSlot as f, createTextVNode as h, toDisplayString as y, unref as c, openBlock as a, createElementBlock as v, createBlock as l, resolveDynamicComponent as u } from "vue";
const k = (s, t) => {
  const n = s[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((e, o) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
}, w = { key: 1 }, b = {
  __name: "MankuIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    size: {
      type: [String, Number]
    },
    width: {
      type: [String, Number],
      default: ""
    },
    height: {
      type: [String, Number],
      default: ""
    },
    color: {
      type: String,
      default: "#737373"
    }
  },
  setup(s) {
    const t = p("notFound", g("Icon not found")), n = m({
      noIcon: !1
    }), e = s, o = d(
      () => {
        const i = e.name.toLowerCase();
        return k(/* @__PURE__ */ Object.assign({ "../assets/icons/binderlink.svg": () => import("./binderlink-8d3acc55.js"), "../assets/icons/conformsto.svg": () => import("./conformsto-1911bd71.js"), "../assets/icons/login.svg": () => import("./login-5fba9bbb.js"), "../assets/icons/loginplus.svg": () => import("./loginplus-aa585316.js"), "../assets/icons/public.svg": () => import("./public-c14cdd32.js"), "../assets/icons/signedlanguage.svg": () => import("./signedlanguage-87a6cb3e.js"), "../assets/icons/spokenlanguage.svg": () => import("./spokenlanguage-85c1a282.js"), "../assets/icons/writtenlanguage.svg": () => import("./writtenlanguage-1b31e50e.js") }), `../assets/icons/${i}.svg`).then((r) => r, (r) => (n.noIcon = !0, {}));
      }
    );
    return (i, r) => n.noIcon ? f(i.$slots, "notFound", { key: 0 }, () => [
      h(y(c(t)), 1)
    ]) : (a(), v("span", w, [
      e.size ? (a(), l(u(c(o)), {
        key: 0,
        fill: e.color,
        width: e.size,
        height: e.size
      }, null, 8, ["fill", "width", "height"])) : (a(), l(u(c(o)), {
        key: 1,
        fill: e.color,
        width: e.width,
        height: e.height
      }, null, 8, ["fill", "width", "height"]))
    ]));
  }
};
export {
  b as MankuIcon
};
