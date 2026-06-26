import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Moon, Sun, Keyboard } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";


const NAV = [
  { to: "/", label: "Home" },
  { to: "/typing-levels", label: "Typing Levels" },
  { to: "/videos", label: "Videos" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;



export function Header() {

  const [open, setOpen] = useState(false);

  const { theme, toggle } = useTheme();

  const { scrollY } = useScroll();

  const py = useTransform(scrollY, [0, 80], [16, 8]);

  const pathname = useLocation().pathname;



  return (

    <motion.header
      style={{
        paddingTop: py,
        paddingBottom: py
      }}
      className="
      sticky 
      top-0 
      z-50 
      w-full 
      glass 
      border-b 
      border-border/50
      "
    >


      <div
        className="
        mx-auto 
        max-w-7xl 
        px-4 
        sm:px-6 
        lg:px-8 
        flex 
        items-center 
        gap-4
        "
      >


        {/* Logo */}

        <Link
          to="/"
          className="
          flex 
          items-center 
          gap-3 
          shrink-0
          "
        >

          <div
            className="
            relative 
            h-11 
            w-11 
            rounded-full 
            overflow-hidden 
            ring-2 
            ring-primary/40 
            shadow-glow
            "
          >

            <div className="absolute inset-0 gradient-bg" />

            <Keyboard
              className="
              absolute 
              inset-0 
              m-auto 
              h-6 
              w-6 
              text-primary-foreground
              "
            />

          </div>

        </Link>




        {/* Title */}

        <div
          className="
          flex-1 
          min-w-0 
          text-center 
          md:text-left 
          md:ml-2
          "
        >

          <h1
            className="
            font-display 
            font-extrabold 
            text-base 
            sm:text-lg 
            leading-tight 
            gradient-text 
            truncate
            "
          >
            HASRE SUCCESS POINT
          </h1>


          <p
            className="
            text-[11px] 
            sm:text-xs 
            text-muted-foreground 
            -mt-0.5 
            truncate
            "
          >
            Typing Excellence Center
          </p>


        </div>





        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-1">


          {NAV.map((item) => {

            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(
                    item.to.split("/").slice(0, 2).join("/")
                  );


            return (

              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  `
                  relative 
                  px-3 
                  py-2 
                  text-sm 
                  font-medium 
                  rounded-md 
                  transition-colors 
                  hover:text-primary
                  `,
                  active
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >

                {item.label}


                {active && (

                  <motion.span
                    layoutId="nav-underline"
                    className="
                    absolute 
                    left-2 
                    right-2 
                    -bottom-0.5 
                    h-0.5 
                    rounded-full 
                    gradient-bg
                    "
                  />

                )}

              </Link>

            );

          })}


        </nav>





        {/* Theme Button */}

        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="
          shrink-0 
          inline-flex 
          items-center 
          justify-center 
          h-10 
          w-10 
          rounded-full 
          bg-secondary 
          hover:bg-accent 
          transition-colors
          "
        >

          {
            theme === "dark"
              ? <Sun className="h-4 w-4" />
              : <Moon className="h-4 w-4" />
          }

        </button>





        {/* Mobile Button */}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="
          lg:hidden 
          shrink-0 
          inline-flex 
          items-center 
          justify-center 
          h-10 
          w-10 
          rounded-full 
          bg-secondary
          "
        >

          {
            open
              ? <X className="h-5 w-5" />
              : <Menu className="h-5 w-5" />
          }


        </button>


      </div>





      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{
            opacity:0,
            y:-10
          }}
          animate={{
            opacity:1,
            y:0
          }}
          className="
          lg:hidden 
          border-t 
          border-border/50 
          mt-3
          "
        >


          <div
            className="
            mx-auto 
            max-w-7xl 
            px-4 
            py-3 
            flex 
            flex-col 
            gap-1
            "
          >

            {NAV.map((item)=>(

              <Link
                key={item.to}
                to={item.to}
                onClick={()=>setOpen(false)}
                className="
                px-3 
                py-2.5 
                text-sm 
                font-medium 
                rounded-md 
                hover:bg-accent
                "
              >

                {item.label}

              </Link>

            ))}


          </div>


        </motion.div>

      )}


    </motion.header>

  );
}