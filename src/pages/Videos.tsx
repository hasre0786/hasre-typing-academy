import { useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";


const VIDEOS = [
  {
    id: 1,
    title: "Typing Speed Kaise Badhaye",
    description: "Typing practice aur speed improve karne ka easy tarika.",
    category: "Typing",
    videoUrl: "https://www.youtube.com/watch?v=ot-dLyrdm5Y",
    thumbnail: "https://img.youtube.com/vi/ot-dLyrdm5Y/maxresdefault.jpg",
  },

  {
    id: 2,
    title: "Computer Basic Tutorial",
    description: "Computer ke basic concepts sikhein.",
    category: "Computer",
    videoUrl: "https://www.youtube.com/watch?v=s2RgcU3wpWk",
    thumbnail: "https://img.youtube.com/vi/s2RgcU3wpWk/maxresdefault.jpg",
  },

  {
    id: 3,
    title: "Hindi Typing Full Playlist",
    description: "Hindi typing practice videos.",
    category: "Hindi Typing",
    videoUrl: "https://www.youtube.com/watch?v=9e0EMM37xFM&t=14s",
    thumbnail: "https://img.youtube.com/vi/9e0EMM37xFM/maxresdefault.jpg",
  },
];



export default function Videos() {


  useEffect(() => {
    document.title = "Learning Videos — HASRE SUCCESS POINT";
  }, []);



  return (

    <div
      className="
      mx-auto 
      max-w-7xl 
      px-4 
      sm:px-6 
      lg:px-8 
      py-12
      "
    >


      <div className="text-center max-w-2xl mx-auto">


        <h1
          className="
          text-3xl 
          sm:text-4xl 
          font-extrabold 
          font-display
          "
        >

          Learning 
          <span className="gradient-text ml-2">
            Videos
          </span>

        </h1>


        <p className="mt-3 text-muted-foreground">

          Typing, Computer Basics, MS Word aur Internet learning videos.

        </p>


      </div>




      <div
        className="
        mt-10 
        grid 
        gap-6 
        sm:grid-cols-2 
        lg:grid-cols-3
        "
      >



        {VIDEOS.map((v, i) => (


          <motion.a

            key={v.id}

            href={v.videoUrl}

            target="_blank"

            rel="noopener noreferrer"

            initial={{
              opacity:0,
              y:20
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              delay:i * 0.05
            }}

            className="
            group 
            block 
            glass 
            rounded-3xl 
            overflow-hidden 
            hover:-translate-y-1 
            hover:shadow-card 
            transition-all
            "

          >


            <div
              className="
              relative 
              aspect-video 
              overflow-hidden
              "
            >


              <img

                src={v.thumbnail}

                alt={v.title}

                loading="lazy"

                className="
                h-full 
                w-full 
                object-cover 
                group-hover:scale-110 
                transition-transform 
                duration-500
                "

              />



              <div
                className="
                absolute 
                inset-0 
                bg-foreground/30 
                group-hover:bg-foreground/10
                "
              />



              <div
                className="
                absolute 
                inset-0 
                grid 
                place-items-center
                "
              >


                <div
                  className="
                  h-14 
                  w-14 
                  rounded-full 
                  gradient-bg 
                  text-primary-foreground 
                  grid 
                  place-items-center 
                  shadow-glow
                  "
                >

                  <Play
                    className="h-6 w-6 ml-0.5"
                    fill="currentColor"
                  />

                </div>


              </div>


            </div>



            <div className="p-5">


              <span className="text-xs font-medium text-primary">

                {v.category}

              </span>



              <h3
                className="
                mt-1 
                font-display 
                text-lg 
                font-bold
                "
              >

                {v.title}

              </h3>



              <p
                className="
                mt-1 
                text-sm 
                text-muted-foreground 
                line-clamp-2
                "
              >

                {v.description}

              </p>


            </div>



          </motion.a>


        ))}


      </div>



    </div>

  );

}