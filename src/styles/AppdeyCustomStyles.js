const styles = {
  paragraph: "font-electra font-normal text-md text-gray-500 tracking-wide",
  paragraph2:
    "font-electra font-normal text-gradientBaseAccent  md:text-gray-500 tracking-wide",
  paragraph3: "font-electra font-normal text-gray-700 tracking-wide",
  paragraphCustom: "font-electra font-normal  tracking-wide",
  paragraphCentralised:
    "font-electra font-thin text-lg  md:text-xxl  text-center  leading-normal",

  flexRowJustify: "flex flex-row justify-between items-center",
  flexRow: "flex flex-row",
  flexCentered: "flex justify-center items-center ",
  flexStart: "flex justify-start items-start",
  ///flex column
  flexCol: "flex flex-col ",
  spanClass: "font-normal text-2xl text-gray-500",
  ///
  itemsCenter: "flex items-center justify-center ",
  itemsEnd: `flex justify-end`,
  transitions: "transition ease-in-out duration-600",
  transitions2: "transition-all ease-in-out duration-900 delay-900",
  ButtonStyle: "font-electra text-lg font-light  rounded-full",
  labelStyleCustom:
    "absolute mt-1 left-2 text-gray-800 text-sm  font-electra tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 peer-focus:-top-0 peer-focus:text-gray-600 peer-focus:text-sm",
  inputStyles:
    "peer border border-solid border-gray-300 outline-none bg-transparent w-[26rem] py-3 px-2 rounded  placeholder:font-light placeholder:font-raleway placeholder:text-gray-700 focus:border-gray-700 focus:border-2 text-gray-800 font-raleway font-normal shadow placeholder:invisible",
  listStyles:
    "font-electra font-normal tracking-wide leading-6 text-gray-500 capitalize",
  inputStylesCustom:
    "peer border border-solid border-gray-300 outline-none bg-transparent py-3 px-2 rounded  placeholder:font-light placeholder:font-raleway placeholder:text-gray-700 focus:border-gray-700 focus:border-2 text-gray-800 font-raleway font-normal shadow placeholder:invisible",
  labelStyleCustom2:
    "absolute mt-1 left-2 text-gray-800 text-sm  font-electra tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 peer-focus:-top-0 peer-focus:text-gray-600 peer-focus:text-sm",
  labelStyleCustom3:
    "absolute  left-2   font-electra tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 peer-focus:-top-0 peer-focus:text-gray-600 peer-focus:text-sm",

  borderStructure: "border border-solid",
  imagesStyles: "object-cover max-w-full w-full h-full",
};

export const uniqueStyleComponents = {
  paragraphUnderlined: `font-electra font-normal text-gradientBaseAccent text-ellipsis tracking-wider text-lg border-b  border-b-gray-500 border-solid hover:border-b-2 hover:border-b-gradientBaseAccent`,
  text: "text-electra text-gradientBaseAccent text-ellipsis text-md font-normal ",
};

export const Layout = {
  gridLayoutSection: "grid grid-cols-3 gap-8",
  BannerGridLayout: "grid grid-cols-12 gap-0 ",
  BannerGridChild: "col-span-12 md:col-span-4",
  BannerGridChild2: "col-span-12 md:col-span-8",
  BannerGridChild3:
    "col-span-6 tablet:col-span-3 desktop:col-span-4 Xdesktop:col-span-4",
  BannerGridChild4:
    " col-span-6 tablet:col-span-9 desktop:col-span-8 Xdesktop:col-span-8",
  CollectionsLayout:
    "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 lg:gap-8",
  JournalCollectionsLayout:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-8 lg:gap-8",
  PaymentLayout: "grid grid-cols-8 gap-4",
  AdvanceNavLayout: "grid grid-cols-6 gap-4",
  ProductDetailLayout:
    "grid phone:grid-cols-1  tablet:grid-cols-12 laptop:grid-cols-12 desktop:grid-cols-12 Xdesktop:grid-cols-12  gap-0",
  ProductDetailChild: "phone:col-span-1 tablet:col-span-6 desktop:col-span-4",
  ProductDetailChild2: "phone:col-span-1 tablet:col-span-6 desktop:col-span-8",
  gridMoreLayoutSection:
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6",
  contactGridLayout: "grid grid-cols-12 gap-5",
  contactGridChild: "col-span-6",
  contactGridChild2: "col-span-6",
  contactGridChild3: "col-span-12",
  ArtistCollectionLayout:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8 lg:gap-8",
};
export default styles;
