import { defineAsyncComponent as s, openBlock as r, createBlock as c, resolveDynamicComponent as a, unref as u } from "vue";
const m = (n, e) => {
  const t = n[e];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((o, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
}, l = {
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
  setup(n) {
    const e = n, t = s(
      () => m(/* @__PURE__ */ Object.assign({ "../assets/icons/Login+.svg": () => import("./Login_-de106ef9.js"), "../assets/icons/Login.svg": () => import("./Login-9f291134.js"), "../assets/icons/Public.svg": () => import("./Public-ff480fac.js"), "../assets/icons/SpokenLanguage.svg": () => import("./SpokenLanguage-b3c227c7.js"), "../assets/icons/WrittenLanguage.svg": () => import("./WrittenLanguage-903452f8.js") }), `../assets/icons/${e.name}.svg`)
    );
    return (o, i) => (r(), c(a(u(t)), {
      fill: e.color,
      width: e.size,
      height: e.size
    }, null, 8, ["fill", "width", "height"]));
  }
};
export {
  l as MankuIcon
};
