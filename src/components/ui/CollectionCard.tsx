import React from "react";
import ThumbNail from "./ThumbNail";

type CollectionProps = {
  title: string;
  collectionSize: number;
  user: string;
  tags: Array<any>;
  sourceOne: string;
  sourceTwo: string;
  sourceThree: string;
};

const CollectionCard: React.FC<CollectionProps> = ({
  title,
  collectionSize,
  user,
  tags,
  sourceOne,
  sourceTwo,
  sourceThree
}) => {
  return (
    <section className="flex flex-col justify-start gap-2 items-center w-[356px] aspect-square   ">
      <ThumbNail
        sourceOne={sourceOne}
        sourceTwo={sourceTwo}
        sourceThree={sourceThree}
      />
      <section className="w-full flex flex-col justify-start items-start gap-3 overflow-hidden">
        <h1 className="font-semibold capitalize text-nowrap text-clip text-slate-600 text-xl">
          {title}
        </h1>

        <section className="flex justify-start items-center gap-2 text-slate-400 *:text-sm capitalize">
          <p>{collectionSize}</p>
          <p>Photos</p>
          <p className="text-xs"> &bull;</p>
          <p>Curated by</p>
          <p className="text-xs text-clip	">{user}</p>
        </section>
        <div className="flex items-center justify-start gap-2 w-full  ">
          {tags.map((tag) => (
            <button className="tag-button">{tag.title}</button>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CollectionCard;
