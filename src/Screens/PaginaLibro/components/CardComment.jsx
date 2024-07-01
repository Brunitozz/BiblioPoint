import { NavLink } from 'react-router-dom'
import defatulImg from './../../../assets/screen-0.jpg'

export const CardComment = ({ comment, idComment, name, id_user}) => {
  return (
    <>
      <section>
        <div className="w-full flex gap-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <img src={defatulImg} alt="" />
            </div>
            <div className="flex flex-col">
              <NavLink to={`/main/perfil/${id_user}`} className="font-semibold" >{name}</NavLink>
              <p>{ comment }</p>
            </div>
          </div>
      </section>
    </>
  )
}