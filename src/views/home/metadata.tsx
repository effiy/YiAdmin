import { reactive } from "vue";

export const genState = reactive({
  layout: [
    { x: 0, y: 9, w: 5, h: 11, i: "1", el: "CivitaiCard", data: {} },
    { x: 0, y: 0, w: 8, h: 9, i: "2", el: "PortfolioCard", data: {} },
    { x: 5, y: 9, w: 3, h: 11, i: "3", el: "MemberCard", data: {} },
    { x: 8, y: 0, w: 4, h: 11, i: "4", el: "ProjectCard", data: {} },
    { x: 8, y: 11, w: 4, h: 6, i: "5", el: "TestimonialCard", data: {}, rate: 0 },
    { x: 8, y: 17, w: 4, h: 3, i: "6", el: "PlaceholderCard", data: {} }
  ],
  colNum: 12,
  index: 6
});
