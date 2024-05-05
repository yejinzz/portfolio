import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useRef } from 'react';

const Markdown = ({ children }: { children: string }) => {
  const ref = useRef<SyntaxHighlighter>(null);
  return (
    <CustomMarkdown
      children={children}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');

          // 사용된 언어가 표시되어있는 경우
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={dracula}
              ref={ref}
            />
          ) : (
            // 사용된 언어를 명시하지 않거나 적합하지 않을 경우
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default Markdown;
const CustomMarkdown = styled(ReactMarkdown)`
  strong {
    ${tw`
        font-bold
    `}
  }
  pre div {
    background: #2d2d2d !important;
  }
  code {
    ${tw`
    py-[2px]
    px-[6px]
    rounded-[5px]
    bg-[#484848]
    text-[#fff]
    text-[.875rem]
`}
  }
`;
