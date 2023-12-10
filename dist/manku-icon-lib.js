import { inject as c, ref as a, reactive as u, defineAsyncComponent as l, renderSlot as m, createTextVNode as p, toDisplayString as g, unref as i, openBlock as f, createBlock as d, resolveDynamicComponent as y } from "vue";
const v = (r, t) => {
  const e = r[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((n, s) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + t)));
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
  setup(r) {
    const t = c("notFound", a("Icon not found")), e = u({
      noIcon: !1
    }), n = r, s = l(
      () => v(/* @__PURE__ */ Object.assign({ "../assets/icons/ConformsTo.svg": () => import("./ConformsTo-1911bd71.js"), "../assets/icons/Login+.svg": () => import("./Login_-de106ef9.js"), "../assets/icons/Login.svg": () => import("./Login-5fba9bbb.js"), "../assets/icons/Public.svg": () => import("./Public-c14cdd32.js"), "../assets/icons/SpokenLanguage.svg": () => import("./SpokenLanguage-85c1a282.js"), "../assets/icons/WrittenLanguage.svg": () => import("./WrittenLanguage-1b31e50e.js") }), `../assets/icons/${n.name}.svg`).then((o) => o, (o) => (console.error(o), e.noIcon = !0, {}))
    );
    return (o, h) => e.noIcon ? m(o.$slots, "notFound", { key: 0 }, () => [
      p(g(i(t)), 1)
    ]) : (f(), d(y(i(s)), {
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
