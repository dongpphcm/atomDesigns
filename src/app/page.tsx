// import ButtonDefault from "@/components/atoms/Button";
import Avatar from "@/components/atoms/Avatar";
import ButtonIcon from "@/components/atoms/Badge";
// import Kids, { ItemImageCarousel } from "@/components/atoms/Carousel";

export default function Home () {
  // const list: Array<ItemImageCarousel> = [
  //   {
  //     title: "giang sinh",
  //     alt: "giang sinh",
  //     src: "/giang-sinh.png",
  //   },
  //   {
  //     title: "giang sinh",
  //     alt: "giang sinh",
  //     src: "/giang-sinh.png",
  //   },
  //   {
  //     title: "giang sinh",
  //     alt: "giang sinh",
  //     src: "/giang-sinh.png",
  //   },
  // ];

  return (
    <div className='flex items-center justify-center bg-cyan-600'>
      <ButtonIcon  label={<Avatar src="/order-box.png"/>}/>
    </div>
  );
}
