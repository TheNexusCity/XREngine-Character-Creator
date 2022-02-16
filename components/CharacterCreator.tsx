import * as React from "react";
import { useGlobalState } from "./GlobalProvider";
import Scene from "./Scene";
import Tools from "./Tools";
import RandomizeButton from "./Tools/randomize";
import { apiService, threeService } from "../services";

export default function CharacterCreator(props: any) {
  const {
    setScene,
    scene,
    model,
    setModel,
    setTemplateInfo,
    templateInfo,
    randomize,
    setRandomize,
  }: any = useGlobalState();
  React.useEffect(() => {
    apiService.fetchTemplate((props?.match?.params?.id) ?? 'default').then((res) => {
      setTemplateInfo(res);
    });
  }, [props.match.params.id]);

  React.useEffect(() => {
    // console.log("Template Information Response: ", templateInfo);
    if (templateInfo?.directory && templateInfo?.file && templateInfo?.format && templateInfo?.editor) {
      threeService
        .loadModel(templateInfo?.directory + templateInfo?.file, templateInfo?.format)
        .then((model: any) => {
          if (model.scene) {
            console.log(model.scene);
            setScene(model.scene);
            setModel(model);
          }
        });
    }
  }, [templateInfo?.file]);

  React.useEffect(() => {
    if (scene?.children && templateInfo?.editor) {
      threeService.randomizeMeshes(scene,templateInfo);
      threeService.randomize(scene,templateInfo);
    }
  }, [scene]);

  React.useEffect(() => {
    if (scene?.children && templateInfo?.editor && randomize) {
      console.log("Randomized!!!");
      threeService.randomizeMeshes(scene,templateInfo).then(() => {
        setRandomize(false);
      });
    }
  }, [randomize]);

  return (
    <React.Fragment>
      <Tools />
      <RandomizeButton />
      <Scene editor="generator" wrapClass="generator" />
    </React.Fragment>
  );
}
