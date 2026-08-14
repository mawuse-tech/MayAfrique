// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// import collectionOne from "../assets/picfour.jpg";
// import collectionTwo from "../assets/picfive.jpg";
// import collectionThree from "../assets/picsix.jpg";

// const collections = [
//   {
//     number: "01",
//     season: "SS 2026",
//     title: "Summer Unapologetically",
//     description:
//       "A celebration of confidence, movement, and individuality. Designed for those who choose to take up space and express themselves without compromise.",
//     image: collectionOne,
//   },
//   {
//     number: "02",
//     season: "EDIT 02",
//     title: "Made to Move",
//     description:
//       "Relaxed silhouettes, considered details, and versatile pieces designed to move effortlessly between everyday life and moments that matter.",
//     image: collectionTwo,
//   },
//   {
//     number: "03",
//     season: "ESSENTIALS",
//     title: "The Everyday Edit",
//     description:
//       "A collection of timeless pieces created to become part of your wardrobe for years, not just a season.",
//     image: collectionThree,
//   },
// ];

// const CollectionPage = () => {
//   return (
//     <main className="bg-[#f8f7f3] pt-32 text-black lg:pt-40">

//       {/* Hero */}
//       <section className="mx-auto max-w-[1600px] px-6 pb-20 sm:px-10 md:px-14 lg:px-20 lg:pb-28">
//         <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

//           <div>
//             <p className="mb-5 text-xs uppercase tracking-[0.35em] text-neutral-500">
//               May Afrique / Collections
//             </p>

//             <h1 className="max-w-5xl text-6xl font-medium uppercase leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]">
//               Made to
//               <br />
//               be seen.
//             </h1>
//           </div>

//           <div className="max-w-md lg:pb-3">
//             <p className="text-base leading-7 text-neutral-600 sm:text-lg">
//               Collections rooted in self-expression, thoughtful design,
//               and the beauty of everyday movement. Designed in Ghana,
//               created for wherever life takes you.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Featured Collection */}
//       <section className="px-4 sm:px-6 md:px-10 lg:px-16">
//         <div className="relative mx-auto max-w-[1600px] overflow-hidden">

//           <img
//             src={collectionOne}
//             alt="Summer Unapologetically collection"
//             className="h-[65vh] w-full object-cover sm:h-[75vh] lg:h-[85vh]"
//           />

//           <div className="absolute inset-0 bg-black/20" />

//           <div className="absolute bottom-8 left-6 max-w-xl text-white sm:bottom-12 sm:left-10 md:left-14 lg:bottom-16 lg:left-16">
//             <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
//               Featured Collection / 01
//             </p>

//             <h2 className="text-4xl font-medium uppercase leading-none sm:text-5xl md:text-6xl lg:text-7xl">
//               Summer
//               <br />
//               Unapologetically
//             </h2>

//             <p className="mt-5 max-w-md text-sm leading-6 text-white/80 sm:text-base">
//               Bold silhouettes and effortless pieces for a season of
//               showing up exactly as you are.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Collection Stories */}
//       <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-32">

//         <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-400">
//               Explore
//             </p>

//             <h2 className="text-4xl font-medium uppercase leading-none sm:text-5xl md:text-6xl">
//               Our collections
//             </h2>
//           </div>

//           <p className="max-w-md text-sm leading-6 text-neutral-500">
//             Each collection tells a different story while staying true
//             to the May Afrique approach: thoughtful design, confident
//             expression, and pieces made to live in.
//           </p>
//         </div>

//         {/* Collection Cards */}
//         <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

//           {collections.map((collection) => (
//             <article key={collection.number} className="group">

//               {/* Image */}
//               <div className="relative mb-6 overflow-hidden">
//                 <img
//                   src={collection.image}
//                   alt={collection.title}
//                   className="h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[600px] lg:h-[650px]"
//                 />

//                 {/* Number */}
//                 <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs">
//                   {collection.number}
//                 </span>
//               </div>

//               {/* Content */}
//               <div>
//                 <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
//                   {collection.season}
//                 </p>

//                 <h3 className="mb-4 text-2xl font-medium uppercase leading-tight sm:text-3xl">
//                   {collection.title}
//                 </h3>

//                 <p className="mb-6 max-w-md text-sm leading-6 text-neutral-500">
//                   {collection.description}
//                 </p>

//                 <button
//                   type="button"
//                   className="group/button flex items-center gap-3 text-xs uppercase tracking-[0.2em]"
//                 >
//                   Discover collection

//                   <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover/button:bg-black group-hover/button:text-white">
//                     <FaArrowRight className="text-[10px]" />
//                   </span>
//                 </button>
//               </div>

//             </article>
//           ))}

//         </div>
//       </section>

//       {/* Brand Statement */}
//       <section className="bg-black px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 lg:py-32">

//         <div className="mx-auto max-w-[1600px]">

//           <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
//             The May Afrique approach
//           </p>

//           <h2 className="max-w-6xl text-4xl font-light uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
//             We don't design for a
//             <br className="hidden md:block" />
//             season. We design for
//             <br className="hidden md:block" />
//             <span className="font-medium">your story.</span>
//           </h2>

//           <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:flex-row md:items-end">
//             <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
//               Fashion should feel personal. Our collections are created
//               with an appreciation for craftsmanship, conscious choices,
//               and the freedom to make every piece your own.
//             </p>

//             <p className="text-xs uppercase tracking-[0.25em] text-white/40">
//               Designed in Ghana
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-6 py-24 text-center sm:px-10 md:py-32">

//         <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
//           Find your expression
//         </p>

//         <h2 className="mx-auto max-w-3xl text-4xl font-medium uppercase leading-none sm:text-5xl md:text-6xl">
//           Something for every version of you.
//         </h2>

//         <button
//           type="button"
//           className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#7F0000] px-7 py-4 text-sm uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
//         >
//           Explore the collection

//           <FaArrowRight className="text-xs" />
//         </button>

//       </section>

//     </main>
//   );
// };

// export default CollectionPage;