import Timer from "@/Timer";

export default function Home() {
  return (
    <div className="w-full">
      <div className="stripe">
        <div className="stripe_inner z-20">
          <div
            className=" flex justify-center items-center flex-col text-center text-3xl font-bold p-8"
            style={{ color: "#FFF" }}
          >
            <h1 className="mb-4">
              RICHI PITURISSSSSSSS TIENE QUE INSCRIBIRSE A LA MAESTRIA
            </h1>
            <Timer />
            <div className="mb-3" />
            <button
              style={{
                background: "green",
                padding: "12px 14px",
                borderRadius: "14px",
              }}
            >
              <a href="https://gobierno.uniandes.edu.co/maestria-gestion-publica-requisitos-de-admision/">
                INSCRIPSION
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
