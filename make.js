import { CSV } from "https://js.sabae.cc/CSV.js";

class MarkdownQA {
  static toJSON(md) {
    const ss = md.split("\n");
    const res = [];
    let i = 0;
    for (; i < ss.length; i++) {
      if (ss[i].startsWith("## ")) {
        break;
      }
    }
    for (; i < ss.length; i++) {
      const q = ss[i].substring(3);
      const a = [];
      for (i++; i < ss.length; i++) {
        const a1 = ss[i];
        if (a1.length == 0) {
          break;
        }
        a.push(a1);
      }
      res.push({ q, a: a.join("\n") });
    }
    return res;
  };
  static makeHTML(json) {
    const res = [];
    let idx = 1;
    for (const d of json) {
      res.push(`<section><b>${idx++}. ${d.q}</b><br>`);
      res.push(d.a.replace(/\n/g, "<br>"));
      res.push("</section>");
    }
    return res.join("\n");
  }
};

const fn = "20211001-tokushima";
const md = await Deno.readTextFile(fn + ".md");
const json = MarkdownQA.toJSON(md);
console.log(json);
await Deno.writeTextFile(fn + ".csv", CSV.stringify(json));

const html = MarkdownQA.makeHTML(json);
await Deno.writeTextFile(fn + ".html", html);
