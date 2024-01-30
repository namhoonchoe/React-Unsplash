import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import { useLocation, useParams } from "react-router-dom";
import useSWR from "swr";

const getPhoto = async (url: string) => {
  const { data } = await unsplashApi.get(url);
  return data;
};

export default function PhotoDetailPage() {
  const {
    state: { aspectRatio },
  } = useLocation();
  const { photoId } = useParams();

  const { data: photo, isLoading } = useSWR<any>(`photos/${photoId}`, getPhoto);

  return (
    <>
      {photo && aspectRatio >= 1 ? (
        <section className="w-[80vw] ">
          <div
            className="w-2/3"
            style={{
              aspectRatio: aspectRatio,
            }}
          >
            <ImageCard
              imageUrl={photo?.urls?.regular}
              blurHash={photo?.blur_hash}
            />
          </div>
        </section>
      ) : (
        <section
          className="w-[60vw] h-fit   flex items-start justify-start  "
          
        >
          <div className="w-7/12" style={{
            aspectRatio: aspectRatio,
          }}>
            <ImageCard
              imageUrl={photo?.urls?.regular}
              blurHash={photo?.blur_hash}
            />
          </div>
          <div className="w-5/12 h-full"  >
            
          </div>
        </section>
      )}
    </>
  );
}
