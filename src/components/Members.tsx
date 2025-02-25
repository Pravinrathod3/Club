
import { Users } from 'lucide-react';

const Members = () => {
  const members = [
    {
      "name": "Gayatri Deepak Pawar ",
      "year": "2nd year",
      "role": "Public relations and marketing head",
      "skills": ["HTML", "CSS", "C++"],
      "links": "https://www.linkedin.com/in/gayatripawar01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQHMk3NJvulmbQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728745402134?e=1746057600&v=beta&t=nJ_vWxAb5IwmXm0bXZU7SEEyuO-d9lfK1FkugTi7wgQ"
    },
    {
      "name": "Sarthak Rajendra Pawar ",
      "year": "3rd year ",
      "role": "Treasurer ",
      "skills": ["Web Development","Spring Boot", "AWS"],
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQHoG7N5cMzecw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709379876369?e=1746057600&v=beta&t=K0wYN49Hr7z_HANbPDUGyNboLmW9UdGLr5HGvyc-J0s",
      "links": "https://www.linkedin.com/in/sarthak-pawar-5782462b8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      "name": "Sakshi Babanagare ",
      "year": "3rd year",
      "role": "Event management head and PR head",
      "skills": ["c++", "Java", "python" ],
      "links": "https://www.linkedin.com/in/sakshi-babanagare-771669305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D4D35AQFRMFdAKv1gsQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738047893778?e=1741100400&v=beta&t=o8B276jJEz5TivSaYktf5P7eNQyK5nLhGELDdblOIYQ"
    },
    {
      "name": "Kanchan Shyamsing Rajput ",
      "year": "3rd year ",
      "role": "Secretary ",
      "skills": ["Java", "Full stack developer" , "MERN stack developer" ],
      "links": "https://www.linkedin.com/in/kanchan-rajput-97b35a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQFDzzcDGclVMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727981672958?e=1746057600&v=beta&t=mOtuV3x1TZNHAYGpbm7iwVoaeDAuzsNPl5atXb7oYk4"
    },
    {
      "name": "Pravin Rathod",
      "year": "2nd year",
      "role": "Technical Head",
      "skills": ["react.js" , "postgreSQL" ,  "Tailwind"],
      "links": "https://www.linkedin.com/in/pravin-singh-rathod/",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQFXmv8sjVFwLw/profile-displayphoto-shrink_400_400/B4DZRWXGysGkAk-/0/1736615686359?e=1746057600&v=beta&t=L3rE-cIebaWtewoM_DJRcQL8pCv64l4kdyQNzz3AlFY"
    },
    {
      "name": "Aditya Pandurang Bhise",
      "year": "2nd year",
      "role": "Technical team member",
      "skills": ["Web development", "php", "MySql"],
      "links": "https://www.linkedin.com/in/aditya-bhise-7543ab318",
      "image" : "https://media.licdn.com/dms/image/v2/D4E03AQE2hlHmlFDeJQ/profile-displayphoto-shrink_400_400/B4EZRb9Ki2GwAg-/0/1736709549193?e=1746057600&v=beta&t=jUJq5zAsvS_yI_xt2DFWUgmkks0MTY6TXD6CjxjAAWI"
    },
    {
      "name": "Sakshi sunil shirude ",
      "year": "3rd year",
      "role": "Event Management Head",
      "skills": ["Python Technology", "AIML Technology"],
      "links": "https://www.linkedin.com/in/sakshi-shirude-1461aa269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQG5j9He4kGi4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722666939160?e=1746057600&v=beta&t=8wJVvJ63uQ02F-lKLiMnoutvDDzGVd7ClmbiOe-nTsg"
    },
    {
      "name": "PRATIK SHRIRAM KADNOR",
      "year": "2nd year",
      "role": "Technical Team member",
      "skills": ["Html" , "Css" , "JS"],
      "links": "https://www.linkedin.com/in/pratik-kadnor-174334290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQFRxDCQUoMKrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728578252397?e=1746057600&v=beta&t=LNn6FkjJAMzkwRtfZPBcKAyE1reiDVxEI77orwiSLCc"
    },
    {
      "name": "Swikriti R Ghosh",
      "year": "2nd year",
      "role": "Joint Secretary",
      "skills": ["Python", "java" ,"C++"],
      "links": "https://www.linkedin.com/in/swikriti-ghosh-03619a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQHmsVy06R7wvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725375058330?e=1746057600&v=beta&t=e-zgmbRgXCc4Cyo1HLRX-z09heSt9tIJXK_InJR3ImE"
    },
    {
      "name": "Pranav Mulik ",
      "year": "2nd year",
      "role": "Jr. Database Management ",
      "skills": ["C++", "UI/UX", "Frontend Development"],
      "links": "https://www.linkedin.com/in/pranav-mulik-1023b3232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQH42ywRFTg9gQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727192452028?e=1746057600&v=beta&t=dOH2OLi4PVXEAAbfcRH7l5EnwSs_PkAIcvu-2yBL1iM"
    },
    {
      "name": "Sumeet Sanjay Yadav",
      "year": "3rd year",
      "role": "Vice President",
      "skills": ["C++" , "React" , "Tailwind" ],
      "links": "https://www.linkedin.com/in/sumeet-sanjay-yadav-741b86256/",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQF9pM1MMAd_-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721395104257?e=1746057600&v=beta&t=abyq7cZrp7fcHlfPWcUVkGRQ4Dx9Ui6g9bEockWlCrU"
    },
    {
      "name": "Asmita Janardhan Andhare ",
      "year": "3rd year ",
      "role": "Creative and social media team head",
      "skills": ["Java", "c++" ],
      "links": "https://www.linkedin.com/in/asmita-andhare-030728324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "image": "https://media.licdn.com/dms/image/v2/D4D35AQFaa-aDPWN8GA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1735300087577?e=1741100400&v=beta&t=IHmKJPiKNtxi87k-wEZFHwBzqbDbyRBsHRetUgCBBYg"
    },
    {
      "name": "Aditya Nikam ",
      "year": "2nd year",
      "role": "Creative team",
      "skills": ["Html", "CSS", "javascript" ],
      "links": "https://www.linkedin.com/in/adityaanikam",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQFkiKCK70IbfA/profile-displayphoto-shrink_400_400/B4DZTpUNhdG4Ao-/0/1739081177714?e=1746057600&v=beta&t=ToFkUHDTj-sxoK6_POXrWzDU0kpZfGewFQYNudBHkT0"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-200 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-pink-500" />
            Our Members
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Meet our talented community of coders and creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {members.map((member, index) => (
            <div key={index} className="cursor-polinks bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center" onClick={() => window.open(member.links)}>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-pink-500"
              />
              <h3 className=" text-xl font-semibold text-pink-500">{member.name}</h3>
              <p className="text-yellow-200 mb-2">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.year}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-purple-800/50 text-pink-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;