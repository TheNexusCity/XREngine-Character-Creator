import axios from "axios";

export const meshService = {
  initialLoad,
  setMeshType,
  setPose,
  setStand,
  updateMesh,
  setDefaultBoneRotations,
  getBoneRotation,
};

async function initialLoad(bones) {
  await axios.get("models/poses/default.json").then((res) => {
    (window as any).loadDefaultMeshes(bones, res.data);
    return res.data;
  });
}

async function setMeshType(meshType: any) {
  if (meshType) {
    (window as any).selectedMesh(meshType);
  }
}

async function setPose(selection: any, bones: any) {
  if (selection) {
    let poseData: any;
    await axios.get("models/poses/" + selection.file + ".json").then((res) => {
      poseData = res.data;
      (window as any).loadPose(poseData, bones);
      return poseData;
    });
  }
}

async function setStand(selection: any) {
  if (selection) {
    (window as any).changeStand(selection.file);
  }
}

async function updateMesh(
  category: any,
  selection: any,
  bones: any,
  pose: any
) {
  // (window as any).changeMesh(category, selection, bones, pose);
}

async function getBoneRotation(bone: any) {
  return await (window as any).getRotation(bone);
}

async function setDefaultBoneRotations() {
  const dbRotations = {
    Torso_Hip: (window as any).getRotation("Torso_Hip"),
    Torso_Spine: (window as any).getRotation("Torso_Spine"),
    Torso_Chest: (window as any).getRotation("Torso_Chest"),
    Torso_Neck: (window as any).getRotation("Torso_Neck"),
    Torso_Sholder_L: (window as any).getRotation("Torso_Sholder_L"),
    Torso_UpperArm_L: (window as any).getRotation("Torso_UpperArm_L"),
    ArmL_LowerArm_L: (window as any).getRotation("ArmL_LowerArm_L"),
    ArmL_Hand_L: (window as any).getRotation("ArmL_Hand_L"),
    Torso_Sholder_R: (window as any).getRotation("Torso_Sholder_R"),
    Torso_UpperArm_R: (window as any).getRotation("Torso_UpperArm_R"),
    ArmR_LowerArm_R: (window as any).getRotation("ArmR_LowerArm_R"),
    ArmR_Hand_R: (window as any).getRotation("ArmR_Hand_R"),
    Torso_UpperLeg_L: (window as any).getRotation("Torso_UpperLeg_L"),
    LegL_LowerLeg_L: (window as any).getRotation("LegL_LowerLeg_L"),
    LegL_Foot_L: (window as any).getRotation("LegL_Foot_L"),
    Torso_UpperLeg_R: (window as any).getRotation("Torso_UpperLeg_R"),
    LegR_LowerLeg_R: (window as any).getRotation("LegR_LowerLeg_R"),
    LegR_Foot_R: (window as any).getRotation("LegR_Foot_R"),
  };

  return dbRotations;
}
