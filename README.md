# About the project

![](https://github.com/user-attachments/assets/f84d1b34-6185-4a1a-ac59-e8847ddf9a3d)

`Next.js`와 `GitHub Actions`를 이용하여 블로그를 구축했습니다.

## Built with

프로젝트는 다음과 같은 기능 혹은 기술 스택을 포함하고 있습니다:

- **Next.js**: 모든 소스 코드의 원본은 [d5br5/d5br5.blog](https://github.com/d5br5/d5br5.blog)를 이용하여 제작하였습니다.
- **MDX 포스트 관리**: 블로그 글은 `MDX`(Markdown + JSX) 형식으로 작성되며, 모든 데이터는 [discaptive/blog.discaptive.com-data](https://github.com/discaptive/blog.discaptive.com-data)에서 관리합니다. 데이터 저장 리포지토리를 별도로 만들어 관리 차원에서 용이하게 하였습니다. 이로 인해, 이미지는 `public` 폴더에 저장하는 방식(기존)이 아닌 GitHub 서버에 저장하여 `Image URL`을 가져와 사용하는 방식(신규)으로 바뀌었습니다. (+ 데이터 리포지토리에 MDX로 관리하던 걸 MD로 관리하고, Build 시에 MD를 MDX 파일로 변경하도록 수정하였습니다. 이로 인해, 깃허브 에디터에서 확장자가 mdx일 때 사진이 업로드 되지 않아 md로 바꾸고 업로드하는 번거로움이 사라졌으며 저장할 때 mdx로 다시 바꾸고 저장하던 추가 작업이 없어졌습니다.)
- **Vercel**: 웹 호스팅 용도로 사용하고 있습니다.
- **CI/CD**: `GitHub Actions`를 이용하여 CI/CD 파이프라인을 구축했습니다.
  - Workflow: `blog.discaptive.com-data`를 clone하여 블로그 글을 생성할 수 있도록 하고, Vercel에 배포하여 자동으로 빌드 및 배포 프로세스를 실행할 수 있도록 합니다.

## Production

[Discaptive 블로그](https://blog.discaptive.com)에서 확인할 수 있습니다.

## Speacial Thanks

[김도형 개발 블로그](https://d5br5.dev/blog) / [d5br5](https://github.com/d5br5): Next.js 코드 제공 감사합니다.
