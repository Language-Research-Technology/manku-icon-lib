import { inject as c, ref as a, reactive as u, defineAsyncComponent as l, renderSlot as p, createTextVNode as m, toDisplayString as g, unref as i, openBlock as d, createBlock as f, resolveDynamicComponent as v } from "vue";
const y = (s, t) => {
  const e = s[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((n, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
}, b = {
  __name: "MankuIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    size: {
      type: [String, Number],
      default: 24
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
    const t = c("notFound", a("Icon not found")), e = u({
      noIcon: !1
    }), n = s, r = l(
      () => (n.name.toLowerCase(), y(/* @__PURE__ */ Object.assign({ "../assets/icons/binderlink.svg": () => import("./binderlink-363c3a95.js"), "../assets/icons/conformsto.svg": () => import("./conformsto-1911bd71.js"), "../assets/icons/login.svg": () => import("./login-5fba9bbb.js"), "../assets/icons/loginplus.svg": () => import("./loginplus-aa585316.js"), "../assets/icons/public.svg": () => import("./public-c14cdd32.js"), "../assets/icons/spokenlanguage.svg": () => import("./spokenlanguage-85c1a282.js"), "../assets/icons/writtenlanguage.svg": () => import("./writtenlanguage-1b31e50e.js") }), `../assets/icons/${n.name}.svg`).then((o) => o, (o) => (e.noIcon = !0, {})))
    );
    return (o, k) => e.noIcon ? p(o.$slots, "notFound", { key: 0 }, () => [
      m(g(i(t)), 1)
    ]) : (d(), f(v(i(r)), {
      key: 1,
      fill: n.color,
      width: n.size,
      height: n.size
    }, null, 8, ["fill", "width", "height"]));
  }
};
export {
  b as MankuIcon
};
