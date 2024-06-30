import defatulImg from './../../../assets/screen-0.jpg'
import { CardComment } from './CardComment'

export const CardPost = ({ img, content, idPost, user }) => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="w-full flex gap-4">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img src={defatulImg} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full">
                <h1 className="font-bold">Nombres Apellidos</h1>
                <p>Este es un post hecho sin ganas porque tengo sueño</p>
              </div>
              <div className="flex gap-4">
                <button
                  className="p-2 rounded-lg bg-sky-300 font-semibold shadow-lg"
                >
                  Responder
                </button>
              </div>
            </div>
            <div>
              <CardComment />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}