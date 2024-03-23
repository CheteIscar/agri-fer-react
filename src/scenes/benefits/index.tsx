import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  UserGroupIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/HappyCostumer.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    title: "Machinery Maintenance and Repair",
    description:
      "Comprehensive maintenance and repair for agricultural machinery. Experienced technicians ensure reliable equipment throughout the farming season, minimizing downtime for maximum productivity.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Technical Support and Training",
    description:
      "Technical support for optimizing machinery performance. Tailored training programs empower farmers with skills for effective operation and maintenance, enhancing farming operations.",
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Precision Agriculture Solutions",
    description:
      "Precision solutions enhance farming efficiency and sustainability. Technologies like GPS guidance and yield monitoring optimize inputs for increased profitability and environmental stewardship.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>REDEFINING AGRICULTURAL SUPPORT</HText>
          <p className="my-5 text-sm">
          We offer exceptional service by prioritizing customer needs, providing timely assistance, and ensuring machinery performs optimally. With dedicated support teams, proactive maintenance, and tailored solutions, we redefine agricultural support, empowering farmers for success in every season.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF USERS HAPPY WITH{" "}
                    <span className="text-primary-500">AGRIFERNAN</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              At AgriFernan, customer satisfaction is not just a goal; it's the cornerstone of our business philosophy. We take immense pride in our ability to exceed the expectations of farmers worldwide, delivering innovative agricultural machinery coupled with unparalleled service and support. The resounding happiness among our customers is a testament to our unwavering commitment to their success.

One of the primary reasons for the widespread contentment among our customers is the reliability and durability of our machinery. Whether it's tractors, harvesters, or irrigation systems, AgriFernan's equipment is engineered to withstand the rigors of modern farming practices. This reliability translates into reduced downtime and increased productivity for farmers, allowing them to focus on what they do best – cultivating the land and feeding the world.

Moreover, our dedication to customer support sets us apart in the industry. From the moment a farmer invests in AgriFernan machinery, they become part of our extended family. Our team of knowledgeable experts is readily available to provide guidance, troubleshooting assistance, and personalized recommendations to address specific needs. Whether it's a routine maintenance question or a complex technical issue, farmers can rely on AgriFer's support network to find prompt and effective solutions.

The happiness of our customers also stems from the innovative technologies integrated into our machinery. We continually invest in research and development to stay at the forefront of agricultural innovation, offering cutting-edge solutions that empower farmers to optimize their operations. Whether it's precision agriculture tools, GPS-guided systems, or eco-friendly features, AgriFer machinery equips farmers with the tools they need to thrive in an ever-evolving industry.

In essence, the happiness of AgriFernan customers is the result of our unwavering dedication to quality, service, and innovation. As we continue to push the boundaries of agricultural excellence, we remain steadfast in our commitment to empowering farmers and fostering a brighter future for agriculture.
              </p>
              <p className="mb-5">
              Customers of AgriFernan consistently express their satisfaction and delight with our agricultural machinery and services. The primary reason behind this happiness is our unwavering dedication to providing top-notch products that exceed expectations. Our machinery is renowned for its reliability, durability, and innovative features, ensuring that farmers can tackle their daily tasks with confidence and efficiency.

Additionally, our commitment to customer support plays a significant role in fostering happiness among our clientele. From the moment a farmer chooses AgriFernan, they gain access to a dedicated team of experts who are passionate about ensuring their success. Whether it's providing technical assistance, offering maintenance tips, or delivering personalized recommendations, our support network is always ready to lend a helping hand.

Furthermore, the happiness of AgriFernan customers is a reflection of our ongoing commitment to innovation. By staying at the forefront of agricultural technology, we empower farmers with cutting-edge solutions that enable them to thrive in an increasingly competitive industry. From precision agriculture tools to eco-friendly features, AgriFer machinery equips farmers with the tools they need to navigate the challenges of modern agriculture and achieve their goals.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
