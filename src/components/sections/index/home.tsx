
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="ive been programming, coding and creating since i was able."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="https://i.imgur.com/QfMTOls.png" width={600} height={800} alt="cojovi"   loading="eager" />
					</div>
					<div className={about.copy}>
						<CopyBlock
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="i biuld cool stuff."
						/>
						<CopyBlock
							title="Development and Projects"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="Development and project of all things."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="Security and Privacy"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'shield-alt']}
							copy="Security and privacy are paramount in my approach to development. I prioritize the protection of sensitive data and implement robust security measures. By adhering to industry best practices and staying updated on emerging threats, I ensure that users' information is safeguarded. Trust and confidentiality are the cornerstones of my work, fostering secure and private experiences for all."
						/>
						<CopyBlock
							title="Constant Learning and Improvements"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="I have an insatiable thirst for knowledge and a passion for continuous learning and development. Keeping up with the latest industry trends and emerging technologies allows me to stay ahead of the curve. By actively seeking new challenges and expanding my skill set, I constantly push the boundaries of my abilities, ensuring that I deliver cutting-edge solutions and provide valuable insights to clients."
						/>



						<BadgesBlock
							title="Research and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="One of the most exhilarating aspects of my creative process is conducting in-depth research and meticulous planning for development projects. From Design Systems to Brand Strategy, I relish the opportunity to explore various touchpoints of user experience. Constantly seeking to expand my knowledge and skills, I immerse myself in research to stay ahead of industry trends. By strategically planning and executing projects, I aim to create exceptional digital experiences that exceed expectations and deliver measurable results."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined}						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'Machine Learning', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Artificial Intelligence', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'Deep Learning', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Neural Networks', type: 'fad', icon: 'devicon' },

];
