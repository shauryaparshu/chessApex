import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
      </svg>
    ),
    title: "Interactive Lessons",
    paragraph:
      "Learn chess strategies through engaging, interactive lessons designed for all skill levels, helping you master the game step by step.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          opacity="0.5"
          d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"
        />
        <path d="M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z" />
      </svg>
    ),
    title: "Real-Time Match Analytics",
    paragraph:
      "Receive instant analysis and feedback on your moves during live matches, helping you improve your decision-making in real-time.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    title: "Personalized Coaching",
    paragraph:
      "Work with expert chess coaches who provide tailored lessons and feedback, helping you accelerate your learning curve.",
  },
  {
    id: 4,
    icon: (
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
        <path
          fill-rule="evenodd"
          d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          clip-rule="evenodd"
        />
        <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
      </svg>
    ),
    title: "Tournament Participation",
    paragraph:
      "Compete in exclusive tournaments designed for players at every level, offering prizes and the opportunity to showcase your skills.",
  },
  {
    id: 5,
    icon: (
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
      </svg>
    ),
    title: "Flexible Learning Plans",
    paragraph:
      "Choose from a variety of learning plans that suit your pace, from daily bite-sized lessons to intensive chess masterclasses.",
  },
  {
    id: 6,
    icon: (
      // <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
          clip-rule="evenodd"
        />
        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      </svg>
    ),
    title: "Affordable Pricing",
    paragraph:
      "Access world-class chess resources, coaching, and tournaments at an affordable price, with plans starting as low as ₹499 per month.",
  },
];
export default featuresData;
