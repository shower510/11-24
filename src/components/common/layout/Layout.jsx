import { useEffect, useRef } from 'react';
import './Layout.scss';
import { useSplitText } from '../../../hooks/useSplitText';

export default function Layout({ children, title }) {
	const refFrame = useRef(null);
	//useEffect안쪽에서 자주 쓰일만한 특정 함수를 호출해야됨
	//use로 시작하는 커스텀훅은 특정함수 안쪽에서 호출불가
	//해당 hok이 함수를 반환하도록 처리
	const splitText = useSplitText();
	console.log(splitText);

	useEffect(() => {
		//아래처럼 custom hook이 반환한 함수를 hook이나 핸들러함수 내부에서 가능
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
