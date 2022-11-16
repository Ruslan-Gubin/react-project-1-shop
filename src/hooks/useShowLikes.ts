import React from "react";


const useShowLikes = () => {
  const [showInfoLikes, setShowInfoLikes] = React.useState<string>("");
  const [likesArr, setLikesArr] = React.useState<string[]>([]);

  const handlerShowLikes = (item: string[], id: string) => {
    if (item.length <= 0) {
      return;
    }

    const result = [...item];
    setLikesArr(result);

    if (id === showInfoLikes && likesArr[0] === item[0]) {
      setShowInfoLikes("");
    } else {
      setShowInfoLikes(id);
    }
  }

const  handlerRemoveShowInfo:() => void = () => {
  setShowInfoLikes('')
  }

  return {handlerShowLikes, likesArr, showInfoLikes, handlerRemoveShowInfo};
};

export { useShowLikes };
