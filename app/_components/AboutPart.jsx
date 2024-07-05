'use client';
import Image from 'next/image';
import OurStory from '../../public/OurStory.svg';
import OurFood from '../../public/OurFood.svg';

const AboutPart = () => {
  const AboutSection = [
    {
      image: OurStory,
      title: "Our Story",
      description: "Seven years ago in Makati, Philippines, a taste sensation was born. What began with one small idea turned into a beloved local favorite.\n\nIt all started when Grace Medallada put up a simple sign outside her house, offering home-cooked meals to her neighbors. With dedication and passion for delicious food, Grace’s offerings quickly gained popularity. The demand grew, and soon she expanded to a food cart, making her delectable dishes more accessible to the community.",
      secondDescription: "\n\nToday, G & R Eatery is on the brink of another exciting transformation as we prepare to open our first local food store in Makati City. Specializing in sizzling dishes and beloved Pinoy local foods, we aim to bring the flavors of home to every plate we serve.\n\nAs we continue to grow, our commitment to quality, flavor, and customer satisfaction remains unwavering. Join us at G & R Eatery and experience the taste of home that has been cherished by many."
    },
    {
      image: OurFood,
      title: "Our Food",
      description: "G & R Eatery serves a variety of delicious dishes that have become local favorites. Our best seller is the sizzling sisig, a flavorful and hearty dish that our customers love. In addition to sisig, we offer other mouth-watering options, including chicken and porkchop, both prepared to perfection.\n\nBut it's not all about sizzling dishes at G & R Eatery. We also provide a variety of event-type foods, such as spaghetti, or any other dishes you desire for your special occasions.",
      secondDescription: "For dessert lovers, we offer treats including halo-halo and other Filipino favorites. Our desserts are the perfect way to end your meal on a sweet note. We also create new menu items based on the season, ensuring there's always something fresh and exciting to try at G & R Eatery.\n\nJoin us at G & R Eatery and enjoy a culinary experience that celebrates the best of Filipino cuisine with a modern twist."
    }
  ];

  return (
    <>
      {AboutSection.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse lg:flex-row justify-center items-center py-8 px-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
        >
          <div className="max-w-md mx-auto lg:block hidden">
            <Image src={section.image} alt={`Section ${index + 1}`} width={500} height={400} className="w-full h-4/5 rounded-lg shadow-md" />
          </div>
          <div className="max-w-md mx-auto">
            <div className="md:ml-6">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">{section.title}</h2>
              <p className="text-gray-700 text-center lg:text-left">{section.description}</p>
              <br />
              <p className="text-gray-700 text-center lg:text-left">{section.secondDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
  
};

export default AboutPart;
