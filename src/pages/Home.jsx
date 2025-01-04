import checkItLogo from  "../assets/check-it-logo.svg";	
import landingPageImage from  "../assets/landing-page-image.png";	
import downloadAndroid from  "../assets/get-on-android.svg";	
import downloadIphone from  "../assets/download-on-iphone.svg";	
import underline from  "../assets/underline.svg";	
import arrow from  "../assets/arrow.svg";	
import Feature from "../components/Feature";
import FeatureVariant from "../components/FeatureVariant";
import habitIcon from  "../assets/habit-icon.svg";	
import notesIcon from  "../assets/notes-icon.svg";	
import financeIcon from  "../assets/finance-icon.svg";
import taskIcon from  "../assets/tasks-icon.svg";	
import financeImage from  "../assets/finance.png";
import taskImage from  "../assets/tasks.png";
import notesImage from  "../assets/notes-taking.png";
import habitImage from  "../assets/habits.png";	
function Home(){

//   const jsonObj = {
//   {icon : "🚀",
//     title :"Fast Performance"
//     subText :{`With reminders and visual \n insights, you'll stay motivated
//        to achieve your personal development goals.`}
//     listItems={[
//     'High-speed load times',
//     'Optimized for mobile',
//     'Seamless user experience',
//     'Low latency',
//     }
//     imageSrc="https://via.placeholder.com/400"}
// }

const featuresData = [
  {
    icon: habitIcon,   // Example icon (you can use React Icons or other icon libraries)
    title: "Habit Tracking",
    subText: `With reminders and visual insights, you’ll stay motivated to achieve 
          your personal development goals and make lasting changes.`,
    list: ["Build Positive Routines: Set and track habits",
       "Custom Goals: Track daily, weekly, or personalized", 
       "Progress Monitoring: Visualize your habit streaks progress.",
      "Reminders: Stay on track with customizable reminders."
      ],
    imageSrc: habitImage
  },
  {
    icon: notesIcon,         // Another example icon
    title: "Notes Taking",
    subText: `With reminders and visual insights, you’ll stay motivated to achieve 
your personal development goals and make lasting changes.`,
    list: ["Quick Capture: Jot down ideas, reminders, and thoughts",
       "Multimedia", "Organized Storage: Categorize notes into folders or use tags",
      "Offline Access: Create and view notes without an internet "
      ],
    imageSrc: notesImage
  },

  {
    icon: taskIcon,         // Another example icon
    title: "Task Management",
    subText: `With reminders and visual insights, you’ll stay motivated to achieve 
your personal development goals and make lasting changes.`,
    list: ["Organized Lists: Group tasks into categories or projects",
       "Recurring Tasks: Automate repetitive tasks",
        "Reminders & Notifications: Get alerts for upcoming deadlines"],
    imageSrc: taskImage
  },

  {
    icon: financeIcon,         // Another example icon
    title: "Fiance Management",
    subText: `With reminders and visual insights, you’ll stay motivated to achieve 
your personal development goals and make lasting changes.`,
    list: ["Expense Logging: Record daily expenses and income ",
      "Secure Data: Protect your financial information",
       "Custom Categories: Create personalized categories"],
    imageSrc: financeImage
  }
  // Add more features as needed
];

    return (
        <>
        <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 bg-gray-100 rounded-3xl">
        {/* Left Column */}
        <div className="flex flex-col justify-start items-start px-10 py-16 space-y-6">
          {/* Main Image */}
          <img
            src={checkItLogo}
            alt="Main"
            className="w-16 h-auto"
          />
  
          {/* Big Text */}
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Your<span className="text-orange-400"> All-in-One </span>Life Organizer
          </h1>
  
          {/* Subtext */}
          <p className="text-md lg:text-lg text-gray-600">
          Simplify your life with tools for notes, tasks, habits,<br></br>
          and finances—organized, connected, and<br></br> always
          at your fingertips
          </p>
          
  
          {/* Two Button Images */}
          <div className="flex space-x-4 mt-5 pt-0">
            <img
              src={downloadAndroid}
              alt="Button 1"
              className="w-28 h-auto cursor-pointer"
            />
            <img
              src={downloadIphone}
              alt="Button 2"
              className="w-28 h-auto cursor-pointer"
            />

            <img
              src={arrow}
            className="w-16 h-16 mb-10"
            />
          </div>
  
          {/* Small Text with Image */}
          <div className="flex items-start flex-col space-x-4 -pt-20 ">
          <p className="text-md text-gray-500">Download and start your journey today!</p>
            <img
              src={underline}
              alt="Icon"
              className="w-1/2 h-auto"
            />
          
          </div>
        </div>
  
        {/* Right Column */}
        <div className="flex justify-center items-center pt-8 pr-8">
          <img
            src={landingPageImage}
            alt="Right Column"
            className="w-full h-auto "
          />
        </div>
      </div>
      <div class="flex lg:flex-row  justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 ">

  <div class="flex flex-col items-center space-y-4 mt-16">

    <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-600">
      <span class="text-sm">Features</span>
    </div>

  
    <div class="text-center">
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-800">
      Cutting-edge features for more productivity</h2>
      <p class="text-lg text-gray-600 mt-2">
      oin 400,000 users worldwide who have taken control of their productivity and built better habits with our app.</p>
    </div>
  </div>

</div>
<div>
<ul>
{featuresData.map((feature, index) => (
  <li key={index}>
    {index % 2 === 0 ? 
    <Feature
    icon={feature.icon}
    title={feature.title}
    subText={feature.subText}
    listItems={feature.list}
    imageSrc={feature.imageSrc}
/> : 
<FeatureVariant
    icon={feature.icon}
    title={feature.title}
    subText={feature.subText}
    listItems={feature.list}
    imageSrc={feature.imageSrc}
/>}
    </li>
    
  ))}
  
</ul>
  

</div>

      </> 
    )
}

export default Home


