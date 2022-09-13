const styles = {
  paragraph: "font-electra font-normal text-md text-gray-500 tracking-wide",
  paragraph2: "font-electra font-normal text-gray-500 tracking-wide",
  paragraph3: "font-electra font-normal text-gray-700 tracking-wide",
  paragraphCustom: "font-electra font-normal  tracking-wide",
  paragraphCentralised:
    "font-electra font-thin text-xxl  text-center  leading-normal",
  flexRowJustify: "flex flex-row justify-between items-center",
  flexRow: "flex flex-row",
  flexCentered: "flex justify-center items-center ",
  flexStart: "flex justify-start items-start",
  ///flex column
  flexCol: "flex flex-col ",

  ///
  itemsCenter: "flex items-center justify-center ",
  transitions: "transition ease-in-out duration-600",
  transitions2: "transition-all ease-in-out duration-900 delay-900",
  ButtonStyle: "font-electra text-lg font-light  rounded-full",
  labelStyleCustom:
    "absolute mt-1 left-2 text-gray-800 text-sm  font-electra tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 peer-focus:-top-0 peer-focus:text-gray-600 peer-focus:text-sm",
  inputStyles:
    "peer border border-solid border-gray-300 outline-none bg-transparent w-[26rem] py-3 px-2 rounded  placeholder:font-light placeholder:font-raleway placeholder:text-gray-700 focus:border-gray-700 focus:border-2 text-gray-800 font-raleway font-normal shadow-lg placeholder:invisible",
};

export const Layout = {
  gridLayoutSection: "grid grid-cols-3 gap-8",
  BannerGridLayout: "grid grid-cols-12 gap-0 ",
  BannerGridChild: "col-span-4",
  BannerGridChild2: "col-span-8",
  CollectionsLayout:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-8 lg:gap-8",
  PaymentLayout: "grid grid-cols-8 gap-4",
};
export default styles;
