import { useEffect, useRef } from 'react';
import './Layout.scss';

export default function Layout({ children, title }) {
	const refFrame = useRef(null);
	useEffect(() => {
		refFrame.current.classList.add('on');
	}, []);

	return (
		<main ref={refFrame} className={`Layout ${title}`}>
			<h1>{title}</h1>
			<div className='bar'></div>
			{/* children 복사할거에 해두고
      복사할위치에 <Layout>내용</Layout>감싸면 레이아웃도 복사됨  */}
			{children}
		</main>
	);
}
