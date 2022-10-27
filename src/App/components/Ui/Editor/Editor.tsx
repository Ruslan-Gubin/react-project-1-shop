import React from "react";
import SimpleMDE from "react-simplemde-editor";
import styles from "./Editor.module.scss";

interface EditorProps {
  onChange: (value:string) => void;
  value: string
}

const Editor: React.FC <EditorProps> = ({ onChange, value }) => {

  const onChangeValue = React.useCallback((value: string) => {
    onChange(value);
  }, []);
 
  const options: EasyMDE.Options = React.useMemo(
    () => ({
      autosave: {
        enabled: true,
        deley: 1000,
        uniqueId: "text",
      },
      spellChecker: false,
      maxHeight: "200px",
      status: false,
      toolbarTips: true,
      shortcuts: { toggleFullScreen: null, toggleSideBySide: null },
      hideIcons: ["quote", "side-by-side", "fullscreen"],
      uploadImage: true,
    }),
    []
  );

  return (
    <SimpleMDE
      value={value}
      onChange={onChangeValue}
      className={styles.editor}
      options={options}
    />
  );
};

export { Editor };
