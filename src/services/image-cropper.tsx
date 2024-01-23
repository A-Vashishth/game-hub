import noImage from "../assets/no-image-placeholder.webp";
export default function getCroppedImageUrl(url: string) {
  if (!url) return noImage;
  const target_ = "media/";
  const index_ = url.indexOf(target_) + target_.length;
  return url.slice(0, index_) + "crop/600/400/" + url.slice(index_);
}
