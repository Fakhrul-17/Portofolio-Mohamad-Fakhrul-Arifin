import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Home,User,Briefcase,Mail,
  Menu,X,Sun,Moon,Download,
  ExternalLink,ImageOff,GraduationCap,Award,Calendar,
  MessageCircle,MapPin,Code2,Database,
  Smartphone,Globe,Server,ChevronDown,ChevronLeft,
  ChevronRight,ArrowUp,
} from "lucide-react";

/* lucide-react no longer ships brand/logo icons (Github, Linkedin, dll),
   jadi dua ikon ini dibuat manual sebagai SVG ringan supaya tidak error. */

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* =========================================================
   PROFILE
========================================================= */

const PROFILE = {
  name: "Muhamad Fakhrul Arifin",
  initials: "MFA",
  role: "Fullstack Web Developer",

  tagline:"Fullstack Web Developer yang mengubah kebutuhan bisnis menjadi aplikasi web nyata — mulai dari analisis kebutuhan, perancangan sistem, pengembangan front-end dan back-end, hingga deployment ke production. Terbiasa membangun sistem end-to-end yang benar-benar siap dipakai, bukan sekadar prototipe.",
  location: "Tangerang, Indonesia",
  email: "muhamadfakhlarifin17@gmail.com",
  github:"https://github.com/Fakhrul-17",
  linkedin:"https://www.linkedin.com/in/muhamadfakhrul-arifin-25629b3a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  whatsapp: "62895359804169",
  photo: "/assets/profil.jpeg",
  cvUrl:
    "/assets/CV_Mohamad_Fakhrul_Arifin.pdf",

  aboutMe: `
Saya Muhamad Fakhrul Arifin, Fullstack Web Developer dengan latar belakang mahasiswa Sistem Informasi. Saya membangun aplikasi web secara menyeluruh — merancang basis data, mengembangkan back-end dan REST API, hingga menyusun antarmuka yang siap dipakai pengguna.
Perjalanan saya ke dunia teknologi tidak lurus: saya berlatar belakang pendidikan Teknik Kendaraan Ringan sebelum pindah ke Sistem Informasi. Perpindahan ini mengajarkan saya untuk cepat beradaptasi, belajar secara mandiri, dan berani memulai dari nol — kemampuan yang sekarang menjadi salah satu kekuatan saya sebagai developer.
Saya telah membangun beberapa aplikasi nyata menggunakan React, Node.js, Express, dan MySQL, mulai dari website company profile untuk klien, aplikasi streaming dengan REST API kustom, hingga sistem pendaftaran sekolah berbasis web lengkap dengan autentikasi dan basis data. Bagi saya, setiap error dan kesulitan dalam mengerjakan project bukan hambatan, melainkan bagian dari proses menjadi developer yang lebih baik.
Ke depannya, saya ingin terus berkembang sebagai Web Developer atau Software Developer profesional, membangun produk digital yang benar-benar dipakai dan memberi manfaat bagi penggunanya.
`,

  funFacts: [
    "Membangun sistem end-to-end: front-end, back-end, REST API, hingga basis data.",
    "Berpengalaman merancang basis data dengan ERD dan memodelkan sistem menggunakan UML.",
    "Pindah dari Teknik Kendaraan Ringan ke Sistem Informasi — terbukti cepat beradaptasi dan belajar hal baru.",
  ],
};

/* =========================================================
   EDUCATION / CREDENTIALS
========================================================= */

const CREDENTIALS = [
  {
    icon: "grad",
    title: "S1 Sistem Informasi",
    org: "Universitas Pamulang",
    period: "Sedang Berjalan",
    note:"Mempelajari pengembangan perangkat lunak, basis data, analisis sistem, pemodelan UML, data mining, dan berbagai bidang teknologi informasi.",
  },

  {
    icon: "award",
    title: "Pelatihan Fullstack Developer",
    org: "Harisenin.com",
    period: "Selesai",
    note:"Mengikuti pelatihan pengembangan aplikasi web fullstack yang mencakup front-end, back-end, database, API, dan deployment.",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const STACK = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "PHP",
  "Laravel",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "REST API",
  "Flutter",
];

/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Membangun website yang responsif, modern, dan mudah digunakan sesuai kebutuhan pengguna.",
  },

  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Mengembangkan tampilan website menggunakan HTML, CSS, JavaScript, React, dan Tailwind CSS.",
  },

  {
    icon: Server,
    title: "Backend Development",
    description:
      "Mengembangkan sistem backend menggunakan Node.js dan Laravel untuk menangani logika bisnis, REST API, autentikasi, CRUD, serta integrasi antara aplikasi dan database.",
  },

  {
    icon: Database,
    title: "Database",
    description:
      "Merancang struktur database dan mengelola data menggunakan MySQL maupun PostgreSQL.",
  },

  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Mengembangkan aplikasi mobile menggunakan Flutter dengan tampilan yang responsif.",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    id: "01",
    title: "Anggrayini Nove Tax & Excise Consultant",
    category: "Company Profile Website",
    year: "2026",

    description:
      "Membangun website company profile untuk klien konsultan pajak dan cukai secara end-to-end — dari analisis kebutuhan, desain antarmuka, hingga deployment ke domain produksi. Dilengkapi optimasi SEO on-page dan tampilan responsif penuh di seluruh perangkat.",

    detail:
      "Website ini dibuat untuk klien konsultan pajak dan cukai, Anggrayini Nove Tax & Excise Consultant, sebagai kanal informasi resmi mengenai layanan yang mereka tawarkan. Saya menangani seluruh prosesnya secara end-to-end: menyusun struktur halaman dan desain antarmuka bertema gradient gelap dengan aksen emas sesuai identitas klien, membangun halaman menggunakan HTML, CSS, dan JavaScript, memastikan tampilan sepenuhnya responsif di desktop maupun mobile, hingga menerapkan optimasi SEO on-page (meta tag, sitemap.xml, dan robots.txt) agar mudah ditemukan di mesin pencari. Setelah pengembangan selesai, saya juga menangani deployment ke domain produksi melalui Hostinger dan memverifikasi properti website di Google Search Console — website ini sudah live dan dipakai klien.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "SEO",
    ],

    role:
      "Web Development, Responsive Design, Deployment, dan Hosting",

    link: "https://anggrayininovetaxlawconsultant.com",

    repo: "https://github.com/Fakhrul-17/company-profile.git",

    images: [
      "/assets/projects/CP1.png",
      "/assets/projects/CP2.png",
      "/assets/projects/CP3.png",
      "/assets/projects/CP4.png",
    ],
  },

  {
    id: "02",
    title: "Chill",
    category: "Streaming App",
    year: "2026",

    description:
      "Membangun aplikasi streaming bergaya Netflix secara full-stack — antarmuka React dengan Redux Toolkit di front-end, dan REST API kustom berbasis Node.js di back-end untuk mendukung kebutuhan data aplikasi.",

    detail:
      "Chill adalah project aplikasi streaming bergaya Netflix yang saya bangun untuk mendalami pengembangan full-stack modern. Di front-end, saya membangun antarmuka penjelajahan konten menggunakan React, dengan Redux Toolkit sebagai pengelola state dan Axios untuk komunikasi ke REST API. Di back-end, saya membangun REST API kustom menggunakan Node.js dengan service layer yang dipisahkan dari route (menangani operasi ambil semua data, ambil berdasarkan ID, tambah, ubah, dan hapus data film), lalu mengujinya menggunakan Postman sebelum diintegrasikan ke front-end. Fokus utama project ini adalah menghasilkan antarmuka yang responsif dan terstruktur rapi, didukung API yang benar-benar berfungsi, bukan sekadar data statis.",

    tags: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "Node.js",
      "REST API",
    ],

    role:
      "ndividual Project — Merancang & Membangun Front-End (React) dan Back-End REST API (Node.js) Secara Mandiri",

    link: null,

    repo: "https://github.com/Fakhrul-17/chill-App.git",

    images: [
      "/assets/projects/CA1.png",
      "/assets/projects/CA2.png",
      "/assets/projects/CA3.png",
      "/assets/projects/CA4.png",
      "/assets/projects/CA5.png",
      "/assets/projects/CA6.png",
      "/assets/projects/CA7.png",
      "/assets/projects/CA8.png",
      "/assets/projects/CA9.png",
    ],
  },

  {
    id: "03",
    title: "RA Haniyah — Sistem Pendaftaran Siswa Baru (PPDB)",
    category: "Full-Stack Web App",
    year: "2026",

    description:
      "Membangun sistem pendaftaran siswa baru (PPDB) online untuk RA Haniyah secara full-stack — dari halaman pendaftaran publik hingga dashboard admin untuk memverifikasi dan mengelola data pendaftar.",

    detail:
      "RA Haniyah — Sistem Pendaftaran Siswa Baru adalah project full-stack yang saya bangun untuk mendigitalkan proses PPDB sekolah. Di front-end, saya membangun landing page, formulir pendaftaran multi-langkah dengan validasi, halaman cek status pendaftaran, serta dashboard admin, menggunakan React dan Vite. Di back-end, saya membangun REST API menggunakan Node.js dan Express yang terhubung ke database MySQL, dilengkapi autentikasi admin berbasis JWT dan fitur upload dokumen pendaftaran menggunakan multer. Dashboard admin memungkinkan pihak sekolah memverifikasi pendaftar, mengelola gelombang pendaftaran, serta mengekspor data ke PDF dan Excel. Project ini menjadi bukti nyata kemampuan saya membangun sistem secara menyeluruh — dari analisis kebutuhan hingga aplikasi yang benar-benar berjalan dan bisa dipakai.",

    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
    ],

    role:
      "Pengembangan Full-Stack: Frontend, Backend API, dan Basis Data",

    link: null,

    repo: "https://github.com/Fakhrul-17/Pendaftaran-Sekolah-RA-Haniyah.git",

    images: [
      "/assets/projects/RA1.png",
      "/assets/projects/RA2.png",
      "/assets/projects/RA3.png",
      "/assets/projects/RA4.png",
      "/assets/projects/RA5.png",
      "/assets/projects/RA6.png",
    ],
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_ITEMS = [
  {
    id: "home",
    label: "Beranda",
    icon: Home,
  },

  {
    id: "about",
    label: "Tentang",
    icon: User,
  },

  {
    id: "services",
    label: "Keahlian",
    icon: Code2,
  },

  {
    id: "projects",
    label: "Proyek",
    icon: Briefcase,
  },

  {
    id: "contact",
    label: "Kontak",
    icon: Mail,
  },
];

/* =========================================================
   SCROLL TO SECTION
========================================================= */

const scrollToSection = (id) => {
  const element =
    document.getElementById(id);
  if (!element) return;
  const navbarHeight = 80;
  const elementPosition =
    element.getBoundingClientRect().top +
    window.scrollY;
  const offsetPosition =
    elementPosition - navbarHeight;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/* =========================================================
   REVEAL ANIMATION HOOK
========================================================= */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);

            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, visible];
}

/* =========================================================
   REVEAL COMPONENT
========================================================= */

const Reveal = ({
  children,
  className = "",
}) => {
  const [ref, visible] =
    useReveal();

  return (
    <div
      ref={ref}
      className={`
        transition-all
        duration-1000
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/* =========================================================
   ACTIVE SECTION HOOK
========================================================= */

function useActiveSection(ids) {
  const [active, setActive] =
    useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) =>
        document.getElementById(id)
      )
      .filter(Boolean);

    if (!elements.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                setActive(
                  entry.target.id
                );
              }
            }
          );
        },
        {
          rootMargin:
            "-40% 0px -50% 0px",

          threshold: 0,
        }
      );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return active;
}

/* =========================================================
   PHOTO COMPONENT
========================================================= */

const Photo = ({
  src,
  alt,
  rounded = "rounded-2xl",
  initialsBg,
  dark,
}) => {
  const [failed, setFailed] =
    useState(!src);

  if (failed) {
    return (
      <div
        className={`
          w-full
          h-full
          ${rounded}
          flex
          items-center
          justify-center
          ${
            dark
              ? "bg-slate-800"
              : "bg-gray-100"
          }
        `}
      >
        <span
          className={`
            text-5xl
            font-bold
            ${
              dark
                ? "text-slate-600"
                : "text-gray-300"
            }
          `}
        >
          {initialsBg}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() =>
        setFailed(true)
      }
      className={`
        w-full
        h-full
        object-cover
        grayscale
        group-hover:grayscale-0
        transition-all
        duration-500
      `}
    />
  );
};

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = ({
  dark,
  setDark,
  active,
}) => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          shadow-sm
          backdrop-blur-md
          ${
            dark
              ? "bg-slate-900/95"
              : "bg-white/95"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            h-16
            sm:h-20
            flex
            items-center
            justify-between
          "
        >
          <button
            onClick={() =>
              scrollToSection("home")
            }
            className={`
              text-lg
              sm:text-2xl
              font-bold
              ${
                dark
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-600"
              }
            `}
          >
            {PROFILE.name}_
          </button>

          <div className="flex items-center gap-2">
            {/* DARK MODE */}

            <button
              onClick={() =>
                setDark(
                  (value) => !value
                )
              }
              aria-label="Ganti tema"
              className={`
                p-2
                rounded-lg
                ${
                  dark
                    ? "text-white hover:bg-slate-800"
                    : "text-gray-900 hover:bg-gray-100"
                }
              `}
            >
              {dark ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* MOBILE MENU */}

            <button
              onClick={() =>
                setMenuOpen(true)
              }
              aria-label="Buka menu"
              className={`
                md:hidden
                p-2
                rounded-lg
                ${
                  dark
                    ? "text-white hover:bg-slate-800"
                    : "text-gray-900 hover:bg-gray-100"
                }
              `}
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[60]
            bg-slate-950/98
            backdrop-blur-md
            flex
            items-center
            justify-center
          "
        >
          <button
            onClick={() =>
              setMenuOpen(false)
            }
            aria-label="Tutup menu"
            className="
              absolute
              top-6
              right-6
              text-white
              hover:text-blue-400
            "
          >
            <X size={32} />
          </button>

          <div className="text-center">
            <h2
              className="
                text-3xl
                font-bold
                text-white
                mb-8
              "
            >
              Menu
            </h2>

            <div className="space-y-5">
              {NAV_ITEMS.map(
                (item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMenuOpen(
                        false
                      );

                      setTimeout(() => {
                        scrollToSection(
                          item.id
                        );
                      }, 150);
                    }}
                    className={`
                      block
                      w-full
                      text-2xl
                      font-semibold
                      ${
                        active ===
                        item.id
                          ? "text-blue-400"
                          : "text-white hover:text-blue-400"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* =========================================================
   SIDEBAR
========================================================= */

const Sidebar = ({
  active,
}) => {
  return (
    <aside
      className="
        fixed
        left-0
        top-1/2
        -translate-y-1/2
        z-40
        hidden
        md:block
      "
    >
      <div
        className="
          bg-slate-800
          rounded-r-3xl
          py-6
          px-3
          shadow-xl
        "
      >
        <nav
          className="
            flex
            flex-col
            gap-5
          "
        >
          {NAV_ITEMS.map(
            (item) => {
              const Icon =
                item.icon;

              const isActive =
                active ===
                item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(
                      item.id
                    )
                  }
                  aria-label={
                    item.label
                  }
                  className="
                    group
                    relative
                    p-3
                    rounded-xl
                    hover:bg-slate-700
                    transition-all
                  "
                >
                  <Icon
                    size={23}
                    className={
                      isActive
                        ? "text-blue-400"
                        : "text-white"
                    }
                  />

                  <span
                    className="
                      absolute
                      left-full
                      ml-4
                      top-1/2
                      -translate-y-1/2
                      px-3
                      py-2
                      bg-slate-900
                      text-white
                      text-sm
                      rounded-lg
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      whitespace-nowrap
                      transition-all
                      shadow-xl
                    "
                  >
                    {item.label}
                  </span>
                </button>
              );
            }
          )}
        </nav>
      </div>
    </aside>
  );
};

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = ({
  dark,
}) => {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-screen
        pt-24
        pb-16
        md:pt-28
        md:pb-20
        flex
        items-center
        px-4
        sm:px-6
        scroll-mt-20
      "
    >
      <div className="w-full">
        <div
          className={`
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            md:gap-12
            items-center
            transition-all
            duration-1000
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          {/* TEXT */}

          <div
            className="
              order-last
              md:order-first
            "
          >
            <p
              className={`
                text-xs
                sm:text-sm
                uppercase
                tracking-widest
                mb-4
                ${
                  dark
                    ? "text-slate-400"
                    : "text-gray-500"
                }
              `}
            >
              {PROFILE.name}
            </p>

            <h1
              className={`
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
                mb-5
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              {PROFILE.role}
            </h1>

            <p
              className={`
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-justify
                max-w-xl
                mb-8
                ${
                  dark
                    ? "text-slate-400"
                    : "text-gray-600"
                }
              `}
            >
              {PROFILE.tagline}
            </p>

            {/* BUTTONS */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >
              <a
                href={
                  PROFILE.cvUrl
                }
                download
                className={`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  font-semibold
                  rounded-lg
                  ${
                    dark
                      ? "bg-white text-slate-900 hover:bg-gray-100"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }
                `}
              >
                <Download
                  size={18}
                />

                Unduh CV
              </a>

              <button
                onClick={() =>
                  scrollToSection(
                    "contact"
                  )
                }
                className={`
                  px-7
                  py-3.5
                  border-2
                  font-semibold
                  rounded-lg
                  ${
                    dark
                      ? "border-white text-white hover:bg-white hover:text-slate-900"
                      : "border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >
                Hubungi Saya
              </button>
            </div>
          </div>

          {/* PROFILE PHOTO */}

          <div
            className="
              order-first
              md:order-last
              flex
              justify-center
              md:justify-end
            "
          >
            <div
              className="
                w-56
                h-56
                sm:w-72
                sm:h-72
                md:w-80
                md:h-80
                lg:w-96
                lg:h-96
                rounded-full
                overflow-hidden
                shadow-2xl
                group
                ring-4
                ring-blue-500/20
              "
            >
              <Photo
                src={PROFILE.photo}
                alt="Foto profil"
                rounded="rounded-full"
                initialsBg={
                  PROFILE.initials
                }
                dark={dark}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <button
        onClick={() =>
          scrollToSection(
            "about"
          )
        }
        aria-label="Scroll ke bagian Tentang"
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          sm:flex
          flex-col
          items-center
          gap-2
          text-slate-400
          animate-bounce
        "
      >
        <span className="text-xs">
          Scroll
        </span>

        <ChevronDown size={18} />
      </button>
    </section>
  );
};

/* =========================================================
   ABOUT SECTION
========================================================= */

const AboutSection = ({
  dark,
}) => {
  return (
    <section
      id="about"
      className={`
        px-4
        sm:px-6
        py-20
        md:py-24
        scroll-mt-20
        ${
          dark
            ? "bg-slate-800/50"
            : "bg-gray-50"
        }
      `}
    >
      <div className="w-full">
        <div
          className="
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
          "
        >
          {/* ABOUT */}

          <Reveal>
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                md:gap-14
                items-center
              "
            >
              {/* PHOTO */}

              <div
                className="
                  order-first
                  md:order-last
                  flex
                  justify-center
                  md:justify-end
                "
              >
                <div
                  className="
                    w-64
                    h-80
                    sm:w-72
                    sm:h-96
                    md:w-80
                    md:h-[420px]
                    lg:w-96
                    lg:h-[500px]
                    rounded-2xl
                    overflow-hidden
                    shadow-2xl
                    group
                  "
                >
                  <Photo
                    src={PROFILE.photo}
                    alt="Foto profil"
                    rounded="rounded-2xl"
                    initialsBg={
                      PROFILE.initials
                    }
                    dark={dark}
                  />
                </div>
              </div>

              {/* TEXT */}

              <div
                className="
                  order-last
                  md:order-first
                "
              >
                <h2
                  className={`
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    mb-4
                    ${
                      dark
                        ? "text-white"
                        : "text-gray-900"
                    }
                  `}
                >
                  Tentang Saya
                </h2>

                <div className="w-20 h-1 bg-blue-500 mb-8" />

                <div
                  className={`
                    text-sm
                    sm:text-base
                    leading-7
                    sm:leading-8
                    whitespace-pre-line
                    text-justify
                    break-words
                    ${
                      dark
                        ? "text-slate-300"
                        : "text-gray-600"
                    }
                  `}
                >
                  {PROFILE.aboutMe}
                </div>
              </div>
            </div>
          </Reveal>

          {/* FUN FACTS */}

          <Reveal className="mt-14">
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
              "
            >
              {PROFILE.funFacts.map(
                (fact, index) => (
                  <div
                    key={index}
                    className={`
                      p-5
                      rounded-xl
                      border
                      ${
                        dark
                          ? "bg-slate-900/50 border-slate-700 text-slate-300"
                          : "bg-white border-gray-200 text-gray-600"
                      }
                    `}
                  >
                    <p
                      className="
                        text-sm
                        leading-7
                        text-justify
                      "
                    >
                      {fact}
                    </p>
                  </div>
                )
              )}
            </div>
          </Reveal>

          {/* EDUCATION */}

          <Reveal className="mt-14">
            <h3
              className={`
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Pendidikan & Sertifikasi
            </h3>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >
              {CREDENTIALS.map(
                (credential) => (
                  <div
                    key={
                      credential.title
                    }
                    className={`
                      p-6
                      rounded-2xl
                      border-t-4
                      border-blue-500
                      shadow-sm
                      ${
                        dark
                          ? "bg-slate-900/50"
                          : "bg-white"
                      }
                    `}
                  >
                    <div
                      className={`
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        mb-5
                        ${
                          dark
                            ? "bg-slate-800 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                        }
                      `}
                    >
                      {credential.icon ===
                      "grad" ? (
                        <GraduationCap
                          size={22}
                        />
                      ) : (
                        <Award
                          size={22}
                        />
                      )}
                    </div>

                    <h4
                      className={`
                        text-lg
                        font-bold
                        ${
                          dark
                            ? "text-white"
                            : "text-gray-900"
                        }
                      `}
                    >
                      {
                        credential.title
                      }
                    </h4>

                    <p
                      className={`
                        mt-1
                        text-sm
                        ${
                          dark
                            ? "text-slate-400"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {
                        credential.org
                      }
                    </p>

                    <span
                      className="
                        inline-block
                        mt-4
                        px-3
                        py-1
                        rounded-full
                        bg-blue-500/10
                        text-blue-500
                        text-xs
                        font-semibold
                      "
                    >
                      {
                        credential.period
                      }
                    </span>

                    <p
                      className={`
                        mt-4
                        text-sm
                        leading-7
                        text-justify
                        ${
                          dark
                            ? "text-slate-400"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {
                        credential.note
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </Reveal>

          {/* SKILLS */}

          <Reveal className="mt-14">
            <h3
              className={`
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Kompetensi Teknis
            </h3>

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >
              {STACK.map(
                (skill) => (
                  <span
                    key={skill}
                    className={`
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-semibold
                      border
                      ${
                        dark
                          ? "bg-blue-900/20 text-blue-300 border-blue-800/50"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }
                    `}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   SERVICES SECTION
========================================================= */

const ServicesSection = ({
  dark,
}) => {
  return (
    <section
      id="services"
      className={`
        px-4
        sm:px-6
        py-20
        md:py-24
        scroll-mt-20
        ${
          dark
            ? "bg-slate-900"
            : "bg-white"
        }
      `}
    >
      <div className="w-full">
        <div
          className="
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
          "
        >
          <Reveal>
            <h2
              className={`
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Keahlian Saya
            </h2>

            <div
              className="
                w-20
                h-1
                bg-blue-500
                mt-4
                mb-5
              "
            />

            <p
              className={`
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-justify
                ${
                  dark
                    ? "text-slate-400"
                    : "text-gray-600"
                }
              `}
            >
              Beberapa bidang yang sedang
              saya kembangkan dan gunakan
              dalam pengerjaan project
              akademik maupun project
              pribadi.
            </p>
          </Reveal>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-10
            "
          >
            {SERVICES.map(
              (service) => {
                const Icon =
                  service.icon;

                return (
                  <Reveal
                    key={
                      service.title
                    }
                  >
                    <div
                      className={`
                        h-full
                        p-6
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-xl
                        ${
                          dark
                            ? "bg-slate-800 border-slate-700"
                            : "bg-gray-50 border-gray-200"
                        }
                      `}
                    >
                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-blue-500
                          text-white
                          flex
                          items-center
                          justify-center
                          mb-5
                        "
                      >
                        <Icon
                          size={23}
                        />
                      </div>

                      <h3
                        className={`
                          text-lg
                          font-bold
                          mb-3
                          ${
                            dark
                              ? "text-white"
                              : "text-gray-900"
                          }
                        `}
                      >
                        {
                          service.title
                        }
                      </h3>

                      <p
                        className={`
                          text-sm
                          leading-7
                          text-justify
                          ${
                            dark
                              ? "text-slate-400"
                              : "text-gray-600"
                          }
                        `}
                      >
                        {
                          service.description
                        }
                      </p>
                    </div>
                  </Reveal>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  dark,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        w-full
        text-left
        rounded-2xl
        overflow-hidden
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    >
      {/* IMAGE */}

      <div
        className={`
          ${
            dark
              ? "bg-slate-800"
              : "bg-white"
          }
        `}
      >
        <div
          className="
            aspect-[16/10]
            relative
            overflow-hidden
          "
        >
          {project.images?.[0] ? (
            <img
              src={
                project.images[0]
              }
              alt={
                project.title
              }
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />
          ) : (
            <div
              className={`
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
                ${
                  dark
                    ? "bg-slate-700 text-slate-500"
                    : "bg-gray-100 text-gray-400"
                }
              `}
            >
              <ImageOff
                size={30}
              />

              <span className="text-sm mt-2">
                Screenshot proyek
              </span>
            </div>
          )}

          {/* YEAR */}

          <div
            className="
              absolute
              top-4
              left-4
              px-3
              py-1.5
              bg-slate-900/90
              text-white
              rounded-lg
              text-xs
              font-bold
              flex
              items-center
              gap-1.5
            "
          >
            <Calendar
              size={13}
            />

            {project.year}
          </div>

          {/* HOVER OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-slate-950/85
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                px-5
                py-3
                rounded-lg
                bg-white
                text-slate-900
                font-semibold
                text-sm
              "
            >
              Lihat Detail Project
            </span>
          </div>
        </div>

        {/* CARD FOOTER */}

        <div className="p-5">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">
            {project.category}
          </p>

          <h3
            className={`
              font-bold
              text-lg
              ${
                dark
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            {project.title}
          </h3>

          <p
            className={`
              text-sm
              mt-2
              leading-6
              ${
                dark
                  ? "text-slate-400"
                  : "text-gray-500"
              }
            `}
          >
            Peran:{" "}
            {project.role}
          </p>
        </div>
      </div>
    </button>
  );
};

   /* =========================================================
   PROJECT DETAIL MODAL
========================================================= */

const ProjectDetailModal = ({
  project,
  dark,
  onClose,
}) => {
  const [currentImage, setCurrentImage] =
    useState(0);

  /* Reset slider ketika project berubah */
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  /* Lock body scroll ketika modal terbuka */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!project) {
    return null;
  }

  const images =
    project.images?.length > 0
      ? project.images
      : [];

  const nextImage = () => {
    if (images.length === 0) return;

    setCurrentImage(
      (prev) =>
        (prev + 1) % images.length
    );
  };

  const previousImage = () => {
    if (images.length === 0) return;

    setCurrentImage(
      (prev) =>
        (prev - 1 + images.length) %
        images.length
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
        sm:p-6
        overflow-y-auto
      "
      onClick={onClose}
    >
      <div
        className={`
          relative
          w-full
          max-w-5xl
          max-h-[95vh]
          overflow-y-auto
          rounded-2xl
          shadow-2xl
          ${
            dark
              ? "bg-slate-900"
              : "bg-white"
          }
        `}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* CLOSE BUTTON */}

        <button
          onClick={onClose}
          aria-label="Tutup detail project"
          className="
            absolute
            top-4
            right-4
            z-20
            w-10
            h-10
            rounded-full
            bg-black/60
            text-white
            flex
            items-center
            justify-center
            hover:bg-black/80
            transition-all
          "
        >
          <X size={22} />
        </button>

        {/* IMAGE SLIDER */}

        <div
          className="
            relative
            w-full
            aspect-video
            bg-slate-950
            overflow-hidden
          "
        >
          {images.length > 0 ? (
            <img
              src={
                images[currentImage]
              }
              alt={`${project.title} - ${currentImage + 1}`}
              className="
                w-full
                h-full
                object-contain
              "
            />
          ) : (
            <div
              className="
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
                text-slate-500
              "
            >
              <ImageOff size={40} />

              <p className="mt-3 text-sm">
                Belum ada screenshot
              </p>
            </div>
          )}

          {/* PREVIOUS */}

          {images.length > 1 && (
            <button
              onClick={previousImage}
              aria-label="Foto sebelumnya"
              className="
                absolute
                left-3
                sm:left-5
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-black/60
                text-white
                flex
                items-center
                justify-center
                hover:bg-black/80
                transition-all
              "
            >
              <ChevronLeft
                size={24}
              />
            </button>
          )}

          {/* NEXT */}

          {images.length > 1 && (
            <button
              onClick={nextImage}
              aria-label="Foto berikutnya"
              className="
                absolute
                right-3
                sm:right-5
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-black/60
                text-white
                flex
                items-center
                justify-center
                hover:bg-black/80
                transition-all
              "
            >
              <ChevronRight
                size={24}
              />
            </button>
          )}

          {/* IMAGE COUNTER */}

          {images.length > 1 && (
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                px-3
                py-1.5
                rounded-full
                bg-black/60
                text-white
                text-xs
                font-semibold
              "
            >
              {currentImage + 1} /{" "}
              {images.length}
            </div>
          )}
        </div>

        {/* DOT INDICATOR */}

        {images.length > 1 && (
          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              py-4
            "
          >
            {images.map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentImage(
                      index
                    )
                  }
                  aria-label={`Foto ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    ${
                      currentImage ===
                      index
                        ? "w-7 bg-blue-500"
                        : "w-2 bg-gray-400"
                    }
                  `}
                />
              )
            )}
          </div>
        )}

        {/* PROJECT INFORMATION */}

        <div className="p-6 sm:p-8">
          {/* CATEGORY */}

          <p className="text-blue-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
            {project.category}
          </p>

          {/* TITLE */}

          <h2
            className={`
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-3
              ${
                dark
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            {project.title}
          </h2>

          {/* YEAR */}

          <div
            className={`
              flex
              items-center
              gap-2
              text-sm
              mb-6
              ${
                dark
                  ? "text-slate-400"
                  : "text-gray-500"
              }
            `}
          >
            <Calendar size={16} />

            <span>
              {project.year}
            </span>
          </div>

          {/* DESCRIPTION */}

          <div className="mb-7">
            <h3
              className={`
                text-lg
                font-bold
                mb-3
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Tentang Project
            </h3>

            <p
              className={`
                text-sm
                sm:text-base
                leading-7
                text-justify
                ${
                  dark
                    ? "text-slate-300"
                    : "text-gray-600"
                }
              `}
            >
              {project.detail ||
                project.description}
            </p>
          </div>

          {/* ROLE */}

          <div className="mb-7">
            <h3
              className={`
                text-lg
                font-bold
                mb-3
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Peran Saya
            </h3>

            <p
              className={`
                text-sm
                sm:text-base
                leading-7
                ${
                  dark
                    ? "text-slate-300"
                    : "text-gray-600"
                }
              `}
            >
              {project.role}
            </p>
          </div>

          {/* TECHNOLOGIES */}

          <div className="mb-7">
            <h3
              className={`
                text-lg
                font-bold
                mb-3
                ${
                  dark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Teknologi
            </h3>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {project.tags.map(
                (tag) => (
                  <span
                    key={tag}
                    className={`
                      px-3
                      py-1.5
                      rounded-lg
                      text-xs
                      sm:text-sm
                      font-semibold
                      ${
                        dark
                          ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }
                    `}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ACTION BUTTONS */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              pt-2
            "
          >
            {project.link && (
              <a
                href={
                  project.link
                }
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-lg
                  bg-blue-500
                  text-white
                  font-semibold
                  hover:bg-blue-600
                  transition-all
                "
              >
                Lihat Website

                <ExternalLink
                  size={17}
                />
              </a>
            )}

            {project.repo && (
              <a
                href={
                  project.repo
                }
                target="_blank"
                rel="noreferrer"
                className={`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-lg
                  border
                  font-semibold
                  ${
                    dark
                      ? "border-slate-600 text-white hover:bg-slate-800"
                      : "border-gray-300 text-gray-800 hover:bg-gray-100"
                  }
                `}
              >
                <GithubIcon
                  size={17}
                />

                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
/* =========================================================
   PROJECT SECTION
========================================================= */

const ProjectsSection = ({
  dark,
}) => {
  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="
          min-h-screen
          flex
          items-center
          px-4
          sm:px-6
          py-20
          scroll-mt-20
        "
      >
        <div className="w-full">
          <div
            className="
              max-w-7xl
              mx-auto
              md:pl-12
              lg:pl-24
            "
          >
            {/* HEADER */}

            <Reveal>
              <h2
                className={`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  ${
                    dark
                      ? "text-white"
                      : "text-gray-900"
                  }
                `}
              >
                Proyek Saya
              </h2>

              <div className="w-20 h-1 bg-blue-500 mt-4 mb-5" />

              <p
                className={`
                  max-w-2xl
                  text-sm
                  sm:text-base
                  leading-7
                  text-justify
                  ${
                    dark
                      ? "text-slate-400"
                      : "text-gray-600"
                  }
                `}
              >
                Berikut adalah beberapa
                project yang pernah saya
                kerjakan selama proses
                pembelajaran maupun
                pengembangan kemampuan di
                bidang teknologi informasi.
                Klik salah satu project
                untuk melihat detail dan
                screenshot hasil project.
              </p>
            </Reveal>

            {/* PROJECT GRID */}

            <div
              className="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-7
                mt-10
              "
            >
              {PROJECTS.map(
                (project) => (
                  <Reveal
                    key={
                      project.id
                    }
                  >
                    <ProjectCard
                      project={
                        project
                      }
                      dark={dark}
                      onClick={() =>
                        setSelectedProject(
                          project
                        )
                      }
                    />
                  </Reveal>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL */}

      {selectedProject && (
        <ProjectDetailModal
          project={
            selectedProject
          }
          dark={dark}
          onClose={() =>
            setSelectedProject(
              null
            )
          }
        />
      )}
    </>
  );
};

/* =========================================================
   CONTACT SECTION
========================================================= */

const ContactSection = ({
  dark,
}) => {
  return (
    <section
      id="contact"
      className={`
        px-4
        sm:px-6
        py-20
        md:py-24
        scroll-mt-20
        ${
          dark
            ? "bg-slate-800/50"
            : "bg-gray-50"
        }
      `}
    >
      <div className="w-full">
        <Reveal>
          <div
            className="
              max-w-7xl
              mx-auto
              md:pl-12
              lg:pl-24
              grid
              grid-cols-1
              md:grid-cols-2
              gap-10
              md:gap-12
              items-center
            "
          >
            {/* TEXT */}

            <div
              className="
                order-last
                md:order-first
              "
            >
              <h2
                className={`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  ${
                    dark
                      ? "text-white"
                      : "text-gray-900"
                  }
                `}
              >
                Hubungi Saya
              </h2>

              <div
                className="
                  w-20
                  h-1
                  bg-blue-500
                  mt-4
                  mb-6
                "
              />

              <p
                className={`
                  text-sm
                  sm:text-base
                  leading-7
                  text-justify
                  mb-7
                  ${
                    dark
                      ? "text-slate-400"
                      : "text-gray-600"
                  }
                `}
              >
                Saya terbuka untuk
                kesempatan bekerja,
                magang, kolaborasi
                project, maupun diskusi
                mengenai pengembangan
                aplikasi dan teknologi.
                Jangan ragu untuk
                menghubungi saya.
              </p>

              {/* EMAIL */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-4
                "
              >
                <Mail
                  size={20}
                  className="text-blue-500"
                />

                <a
                  href={`mailto:${PROFILE.email}`}
                  className={`
                    font-semibold
                    break-all
                    ${
                      dark
                        ? "text-white hover:text-blue-400"
                        : "text-gray-900 hover:text-blue-600"
                    }
                  `}
                >
                  {PROFILE.email}
                </a>
              </div>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-7
                "
              >
                <MapPin
                  size={20}
                  className="text-blue-500"
                />

                <span
                  className={
                    dark
                      ? "text-slate-300"
                      : "text-gray-600"
                  }
                >
                  {PROFILE.location}
                </span>
              </div>

              {/* SOCIAL */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  "
                >
                  <MessageCircle
                    size={21}
                  />
                </a>

                {/* EMAIL */}

                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  "
                >
                  <Mail
                    size={21}
                  />
                </a>

                {/* GITHUB */}

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-slate-800
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  "
                >
                  <GithubIcon
                    size={21}
                  />
                </a>

                {/* LINKEDIN */}

                <a
                  href={
                    PROFILE.linkedin
                  }
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-700
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  "
                >
                  <LinkedinIcon
                    size={21}
                  />
                </a>

                {/* CV */}

                <a
                  href={PROFILE.cvUrl}
                  download
                  aria-label="Download CV"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                  "
                >
                  <Download
                    size={21}
                  />
                </a>
              </div>
            </div>

            {/* CONTACT PHOTO */}

            <div
              className="
                order-first
                md:order-last
                flex
                justify-center
                md:justify-end
              "
            >
              <div
                className="
                  w-64
                  h-80
                  sm:w-72
                  sm:h-96
                  md:w-80
                  md:h-[420px]
                  lg:w-96
                  lg:h-[500px]
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                  group
                "
              >
                <Photo
                  src={PROFILE.photo}
                  alt="Foto profil"
                  rounded="rounded-2xl"
                  initialsBg={
                    PROFILE.initials
                  }
                  dark={dark}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================
   FOOTER
========================================================= */

const Footer = ({
  dark,
}) => {
  const [showTop, setShowTop] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(
        window.scrollY > 500
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* BACK TO TOP */}

      {showTop && (
        <button
          onClick={() =>
            scrollToSection("home")
          }
          aria-label="Kembali ke atas"
          className="
            fixed
            bottom-6
            right-6
            z-40
            w-12
            h-12
            rounded-full
            bg-blue-500
            text-white
            shadow-xl
            flex
            items-center
            justify-center
            hover:bg-blue-600
            hover:-translate-y-1
            transition-all
          "
        >
          <ArrowUp
            size={20}
          />
        </button>
      )}

      {/* FOOTER */}

      <footer
        className={`
          border-t
          px-4
          sm:px-6
          py-8
          ${
            dark
              ? "bg-slate-900 border-slate-800 text-slate-500"
              : "bg-white border-gray-200 text-gray-500"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            md:pl-12
            lg:pl-24
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-3
            text-sm
            text-center
            sm:text-left
          "
        >
          <span>
            © {new Date().getFullYear()}{" "}
            {PROFILE.name}
          </span>

          <span>
            {PROFILE.location}
          </span>
        </div>
      </footer>
    </>
  );
};

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portfolio() {
  const [dark, setDark] =
    useState(true);

  const active =
    useActiveSection([
      "home",
      "about",
      "services",
      "projects",
      "contact",
    ]);

  return (
    <div
      className={`
        min-h-screen
        w-full
        overflow-x-hidden
        transition-colors
        duration-300
        ${
          dark
            ? "bg-slate-900"
            : "bg-white"
        }
      `}
    >
      {/* NAVBAR */}

      <Navbar
        dark={dark}
        setDark={setDark}
        active={active}
      />

      {/* SIDEBAR */}

      <Sidebar
        active={active}
      />

      {/* CONTENT */}

      <main>
        <HeroSection
          dark={dark}
        />

        <AboutSection
          dark={dark}
        />

        <ServicesSection
          dark={dark}
        />

        <ProjectsSection
          dark={dark}
        />

        <ContactSection
          dark={dark}
        />
      </main>

      {/* FOOTER */}

      <Footer
        dark={dark}
      />
    </div>
  );
}