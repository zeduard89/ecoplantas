import React from 'react'
import Card from '../Card/Card';
import  {banner2}  from '../Utils/Cloudinary/Cloudinary';

const Catalogo = () => {
  return (
    <div>
        {/* Card */}
      <div className="w-full mt-[11rem] text-center">
        <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className="col-span-1">
            <h1 className=" mb-8 text-3xl xl:text-5xl	font-bold	">CATALOGO EN PROCESO</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rerum alias illo ad necessitatibus, perferendis pariatur labore minus sed aspernatur mollitia, nisi, dolores veniam ullam vel dolor voluptate consequuntur nihil!</h3>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis nesciunt ullam obcaecati recusandae dolore adipisci quidem a ab fuga numquam, illum repellat pariatur cupiditate blanditiis asperiores reprehenderit. Placeat, doloremque.</h3>
          </div>
          <div className="col-span-1  ">
            <Card image={banner2}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo
