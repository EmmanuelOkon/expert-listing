import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { DashboardIcons } from "#/assets/icons/DashboardIcons";

interface NotFoundProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backText?: string;
}

export default function NotFound({
  title = "404 ERROR",
  subtitle = "Page Not Found",
  description = "The page you are looking for doesn't exist or has been moved.",
  backText = "Back to Dashboard",
}: NotFoundProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        <div className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-center text-center h-full my-auto">
          <p className="text-2xl font-bold text-primary-green uppercase tracking-[0.2em]">
            {title}
          </p>

          {/* Replace with your preferred icon from DashboardIcons or Lucide */}
          <DashboardIcons.BrokenBone className="w-32 h-32 my-4 text-primary-green" />

          <h2 className="text-2xl font-semibold text-primary-green">
            {subtitle}
          </h2>

          <p className="mt-2 max-w-md text-sm text-deep-gray">{description}</p>

          <Button
            onClick={() => window.history.back()}
            className="mt-6 px-6 bg-primary-green hover:bg-primary-green/90 transition-colors text-white gap-4 text-[16px] group-hover:translate-x-1 py-[16px] font-medium  duration-300 ease-in-out cursor-pointer h-11"
          >
            {backText}
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
