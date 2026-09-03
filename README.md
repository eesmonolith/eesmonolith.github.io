# eesmonolith.github.io

Justin Eunsang Eom 개인 홈페이지 (이력 관리용, 영어 단일). 정적 HTML + JS, 빌드 도구 없음.
GitHub Pages에 그대로 올리면 `https://eesmonolith.github.io` 에서 열린다.

## 구조

```
index.html          레이아웃 (건드릴 일 거의 없음)
data/cv.js          ★ 모든 내용. 이력 갱신은 이 파일만 수정
assets/style.css    스타일 (라이트/다크 자동)
assets/app.js       cv.js → HTML 렌더링
assets/photo.jpg    프로필 사진
files/              CV PDF 등 다운로드 파일 (cv.js 의 meta.cvPdf 경로와 일치)
.nojekyll           GitHub Pages가 Jekyll 처리하지 않도록
```

## 이력 갱신하는 법

`data/cv.js` 열어서 해당 배열에 객체 추가/수정. 텍스트는 영어 문자열.

| 할 일 | 수정 위치 |
|---|---|
| 논문 accept | `publications` 맨 위에 추가 + `news` 맨 위에 한 줄. 저자명은 출판된 이름 그대로 (`meta.aliases`에 있으면 굵게) |
| 언론 기사 | `press` 맨 위에 추가 (date/outlet/title/url) |
| 링크 붙이기 | 해당 논문 `links: { pdf, code, doi }` 에 URL. 빈 문자열이면 자동 숨김 |
| 경력·강의·학력 | `experience` / `teaching` / `education` |
| 연사·특강 | `talks` |
| 과제(PI) | `grants` (연구비 단위: 천원, 숫자) |
| Scholar·LinkedIn·ORCID | `meta.scholar` / `meta.linkedin` / `meta.orcid` 에 URL. 비우면 버튼 숨김 |
| CV PDF | `files/` 에 공개용 PDF 넣고 `meta.cvPdf` 에 경로 지정 (전화·주소 있는 지원용 이력서 금지) |
| 사진 교체 | `assets/photo.jpg` 덮어쓰기 (정사각형 근처, 640px 정도) |

원칙: **심사 중인 논문은 올리지 않는다** (익명심사 보호). accept 확정 후 추가.

## 로컬 미리보기

```bash
cd homepage
python3 -m http.server 8000
# → http://localhost:8000
```

## 배포 (최초 1회)

```bash
cd homepage
git init -b main
git add .
git commit -m "Initial personal homepage"
gh repo create eesmonolith.github.io --public --source=. --push
```

이후 GitHub 저장소 → Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)` 확인.
몇 분 뒤 `https://eesmonolith.github.io` 에서 확인.

## 갱신 배포

```bash
git add -A
git commit -m "Update CV: <내용>"
git push
```
