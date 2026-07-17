export default function Core() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white h-[300px] md:h-[400px] lg:h-[450px]"
      style={{
        backgroundImage: "url('core.png')", // apni image ka path daal
      }}
    >
      {/* Text Content - Centered & Responsive */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full max-w-3xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 w-full text-balance">
          Our Values, Vision & Beliefs
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-medium w-full text-pretty">
          Excellence, Trust, and Growth guide everything we do at Neelam Print O Pack.
        </p>
      </div>
    </section>
  );
}