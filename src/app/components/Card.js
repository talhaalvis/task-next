// Card.js
import Image from 'next/image';


const Card = () => {
  return (
    <div  style={{ backgroundImage: "url('/assets/Section_Hero.svg')", position: 'relative' }} className='w-full sm:w-full md:w-84 lg:w-68 xl:w-72   h-80 rounded-2xl'>
     
      <div className='flex items-center justify-between w-full p-4'>
        <div style={{width:'35%',height:'40px',borderRadius:"100px",backgroundColor:"rgba(255, 255, 255, 0.17"}} className='flex items-center gap-2 justify-center'
        >
        

            <Image src='/assets/Star.svg' alt='image' width={20} height={20} ></Image>

        <h3 className='text-white'>Tier 1</h3>
        </div>
        <div style={{width:'40%',height:'30px',borderRadius:"100px",backgroundColor:"rgba(8, 6, 10, 0.83)"}} className='flex items-center gap-2 justify-center'
        >
        

            <Image src='/assets/Star.svg' alt='image' width={20} height={20} ></Image>

        <h3 className='text-white'>Tier 1</h3>
        </div>

      </div>
      <div style={{ height: '150px', backgroundColor: "rgba(8, 6, 10, 0.7)", position: 'absolute', bottom: '0', width: '100%' }} className=' from-transparent opacity-70'>
        <div className='px-4 flex flex-col gap-2'>
            <Image src='/assets/logo.svg' alt='image' width={24} height={24} ></Image>
            <div className='flex flex-col gap-1'>

            <h1 className='text-white text-lg'> HIGHFORCE</h1>
            <h3 className='text-white'> Heavy traffic</h3>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <Image src='/assets/logo.svg' width={20} height={20}/>
                    <h3 className='text-white'>3132</h3>
                </div>
                <div className='flex items-center gap-2 '>
                <Image src='/assets/logo.svg' width={20} height={20}/>
                    <h3 className='text-white'>Shutoko Revival Project 0.9.2</h3>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default Card;
