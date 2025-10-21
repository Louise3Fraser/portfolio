import { useState, useEffect } from "react";
import ProjectHeader from "../../components/headers/ProjectHeader";
import vid from "../../assets/itell/itell-vid.mp4";
import old from "../../assets/itell/old-itell.png";
import goals from "../../assets/itell/goals.png";
import question from "../../assets/itell/itell-question.png";
import persona from "../../assets/itell/itell-persona.png";
import ca from "../../assets/itell/itell-ca.png";

export default function Itell({ project, onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`project-page-wrapper ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <ProjectHeader
        project={project}
        onBack={onBack}
        about={`Last year I worked with a team to tackle design challenges for the LEAR Lab's iTELL platform. 
iTELL ("Intelligent Texts for Enhanced Lifelong Learning") is an AI-powered interactive textbook 
framework designed to enhance learning through real-time feedback and user engagement.`}
        tech={["React.js", "Python", "Figma"]}
        skills={["UX Design", "Software Engineering"]}
        type={["Team work"]}
      />
      <div className="project-main-content">
        <h3>⭑ Sneak peek: </h3>
        <video src={vid} width="100%" muted autoPlay loop playsInline />
      </div>
      <div className="divider" />
      <div className="project-main-content">
        <h3>⭑ The old site was functional, but users had some complaints</h3>

        <p>
          The existing platform offered functionality, but user feedback
          highlighted several pain points and areas for improvement. For
          example, the old site has a cluttered interface, overlapping elements
          like notes and the chatbot, and a small logo and header that fail to
          establish a clear visual hierarchy.
        </p>
        <h4>A look at the old site:</h4>

        <img width={"100%"} alt="The previous version of iTELL" src={old} />
        <h4>Diagnosing the issues:</h4>
        <p>
          Given the broad scope of iTELL, we concentrated our efforts on the
          textbook interface, as it is the primary component users engage with.
        </p>
        <ol>
          <li>Overlapping sections</li>
          <li>Cluttered, hard-to-read interface</li>
          <li>AI integration</li>
          <li>Various technical issues</li>
        </ol>
      </div>
      <div className="divider" />

      <div className="project-main-content">
        <h3>⭑ Scope analysis helped clarify the challenge in greater depth</h3>
        <img width={"100%"} alt="HMW iTELL question" src={question} />

        <p>
          While visual improvements were needed, the bigger question is how the
          design impacts the overall learning experience. What barriers are
          preventing students from fully engaging with and benefiting from the
          iTELL platform?
        </p>
      </div>
      <div className="divider" />
      <div className="project-main-content">
        <h3>
          ⭑ There are multiple users of iTELL, but our focus was on the students
        </h3>
        <img width={"100%"} alt="iTELL primary goals" src={goals} />

        <h4>
          Still, it is worth understanding all user groups that will be using
          the platform
        </h4>
        <ol>
          <li>Trade school students</li>
          <li>Instructors</li>
          <li>Educational institutions</li>
          <li>LEAR Lab</li>
        </ol>
        <h4>↳ Trade school student user persona:</h4>
        <img width={"100%"} alt="iTELL user persona" src={persona} />
        <h4>
          iTELL students are likely to have limited technical or online learning
          experience
        </h4>
        <p>
          They value straightforward navigation, clear instructions, and minimal
          distractions to stay engaged with learning content.
        </p>
      </div>
      <div className="divider" />
      <div className="project-main-content">
        <h3>
          ⭑ Competitive analysis revealed common industry practices and learning
          enhancements
        </h3>
        <img width={"100%"} alt="Competitive analysis" src={ca} />
        <h4>
          Key findings highlight common design patterns that consistently
          emerged across the platforms
        </h4>
        <p>
          We performed a competitive analysis of some top competitors, including
          TopHat, Cengage, Macmillan Learning, and SmartBook. Within the online
          textbook market, there has yet to be an application that utilizes AI
          for real-time interactive textbook content.
        </p>
      </div>
    </div>
  );
}
