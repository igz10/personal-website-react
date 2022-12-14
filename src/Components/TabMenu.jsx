import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import AboutTab from "./AboutTab.jsx";
import SkillsTab from "./SkillsTab.jsx";
import ProjectsTab from "./ProjectsTab.jsx";
import ContactTab from "./ContactTab.jsx";
import ResumeTab from "./ResumeTab.jsx";

export default function TabMenu() {
    const [activeTab, setActiveTab] = useState('about');
    return (
        <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            <Tab eventKey="about" title="About">
                <AboutTab />
            </Tab>
            <Tab eventKey="skills" title="Skills">
                <SkillsTab />
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <ProjectsTab />
            </Tab>
            <Tab eventKey="resume" title="Resume">
                <ResumeTab />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <ContactTab />
            </Tab>
        </Tabs>
        
    );
}
