install:
	npm ci
lint:
	npx eslint .
test:
	npm test --watch
test-coverage:
	npm test -- --coverage --coverageProvider=v8