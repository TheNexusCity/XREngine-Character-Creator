import axios from "axios";

import bones from "../library/bones.json";

export const apiService = {
  fetchBones,
  fetchTemplate,
  fetchTemplates
};


async function fetchTemplate(id: any) {
  const response = await axios.get("/templates/templates.json");
  const filtered = response.data.filter((templates: any) => templates.id === id);
  return filtered[0];
}

async function fetchTemplates() {
  const response = await axios.get("/templates/templates.json");
  return response;
}

async function fetchBones() {
  return bones;
}
