import Button from "@/components/button";
import Container from "@/components/container";
import { FaArrowRight } from "react-icons/fa";
import Scales from "@/components/scales";
import Banner from "@/components/banner";
import Heading from "@/components/heading";
import FeatureList from "@/components/featureList";

export default function Home() {
    return (
        <Container className="relative min-h-screen">
            <Scales />
            <div className="pt-20 md:pt-28">
                <Heading />

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                    <Button variant="primary" size="large">
                        <span>Get Started</span>
                        <FaArrowRight className="ml-2 inline-block" />
                    </Button>
                    <Button variant="secondary" size="large">
                        View Example
                    </Button>
                </div>

                <FeatureList />
            </div>
            <Banner />
        </Container>
    );
}
