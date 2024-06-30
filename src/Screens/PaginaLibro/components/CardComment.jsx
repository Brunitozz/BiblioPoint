import defatulImg from './../../../assets/screen-0.jpg'

export const CardComment = () => {
  return (
    <>
      <section>
        <div className="w-full flex gap-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <img src={defatulImg} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">Nombres Apellidos</h1>
              <p>Este es un comentario hecho sin ganas porque tengo sueño</p>
            </div>
          </div>
      </section>
    </>
  )
}