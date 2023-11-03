<template>
  <div class="grid h-screen grid-cols-3 divide-x">
    <div class="flex flex-col h-screen col-span-2 bg-slate-100">
      <div class="flex-1 p-8 overflow-y-auto">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="flex items-center bg-white border-t">
        <button
          @click="prefillDemoData"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="w-4 h-4" />
        </button>
        <button
          @click="publish"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="w-4 h-4" />
        </button>
        <a
          href="https://github.com/fayazara/onelink"
          target="_blank"
          class="flex items-center h-12 px-4 space-x-2 text-xs font-medium bg-white border-r text-slate-700"
        >
          <span> Github </span>
          <icon name="mdi:github" class="w-4 h-4" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a
      href="https://twitter.com/fayazara"
      target="_blank"
      class="absolute bottom-0 right-0 px-4 py-1 text-sm font-medium text-gray-500 bg-white rounded-tl-lg shadow"
    >
      Made by Fayaz
    </a>
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    n: "John Snow",
    d: "I’m John Snow, the king in the north. I know Nothing.",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    f: "https://www.facebook.com/john_snow",
    t: "https://twitter.com/john_snow",
    ig: "https://www.instagram.com/john_snow",
    e: "mail@john_snow.cc",
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/john_snow",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
