## [1.11.2](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.11.1...v1.11.2) (2025-11-19)


### Bug Fixes

* explicitly pass version to metadata-action instead of using git context ([a827668](https://github.com/nathforge/kodi-burn-after-watching/commit/a827668fa9f53acbbdee68bc2f654078e631a923))

## [1.11.1](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.11.0...v1.11.1) (2025-11-19)


### Bug Fixes

* add git context back to metadata-action for semver parsing ([7f9c591](https://github.com/nathforge/kodi-burn-after-watching/commit/7f9c591240cae89d29b65faaa0f9141c4c1f2649))
* test git context metadata ([401ab64](https://github.com/nathforge/kodi-burn-after-watching/commit/401ab64808e913e6875108099846d143dd4b5ed7))

# [1.11.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.10.0...v1.11.0) (2025-11-19)


### Bug Fixes

* detect new tags by checking git tags instead of outputs ([9028a3f](https://github.com/nathforge/kodi-burn-after-watching/commit/9028a3f79646e73bae1f035c86eb82b0b8604434))


### Features

* test fixed unified workflow ([14cd3cb](https://github.com/nathforge/kodi-burn-after-watching/commit/14cd3cb230cbf26c72f49eecf520c600eaf8ca6a))

# [1.10.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.9.0...v1.10.0) (2025-11-19)


### Features

* unified workflow test ([66cf617](https://github.com/nathforge/kodi-burn-after-watching/commit/66cf617affc2c42af2c309502ff4bb95c1d4bac0))

# [1.9.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.8.1...v1.9.0) (2025-11-19)


### Features

* test release workflow trigger ([d4ba0c2](https://github.com/nathforge/kodi-burn-after-watching/commit/d4ba0c2e88eb24cc1aa820c0865cf142d15e7575))
* trigger docker build on release events ([d8e96ac](https://github.com/nathforge/kodi-burn-after-watching/commit/d8e96ac7d1a416cee6f8980acdae8413635e82e2))

## [1.8.1](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.8.0...v1.8.1) (2025-11-19)


### Bug Fixes

* another test deployment ([c259daf](https://github.com/nathforge/kodi-burn-after-watching/commit/c259daf63e08f5e380da1852ad026e3d074933f1))
* remove [skip ci] from release commit to allow docker build to trigger ([2e2fd0b](https://github.com/nathforge/kodi-burn-after-watching/commit/2e2fd0b16f8898894b152a3657baecc2dc0afe8e))

# [1.8.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.7.0...v1.8.0) (2025-11-19)


### Features

* testing deployments ([6497cf2](https://github.com/nathforge/kodi-burn-after-watching/commit/6497cf2d165c265ded7015ad802742060b97c682))

# [1.7.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.6.0...v1.7.0) (2025-11-19)


### Features

* testing deployments ([cc525d5](https://github.com/nathforge/kodi-burn-after-watching/commit/cc525d57fccd70ccfe73851ce1e3d5e17392986b))
* testing deployments ([a433cff](https://github.com/nathforge/kodi-burn-after-watching/commit/a433cffee233ea5b66fbf1a3a3ec1b83727d888e))
* testing deployments ([dba2fc5](https://github.com/nathforge/kodi-burn-after-watching/commit/dba2fc5cad4a9cfa5095be9a7ee9468dfbc71187))

# [1.6.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.5.0...v1.6.0) (2025-11-19)


### Features

* testing deployments ([671369d](https://github.com/nathforge/kodi-burn-after-watching/commit/671369d22461bfdf138729c0c266bf161dc447f9))

# [1.3.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.2.0...v1.3.0) (2025-11-19)


### Features

* test feature for version bump ([b7021f4](https://github.com/nathforge/kodi-burn-after-watching/commit/b7021f470b57d166f0d4046f6ef137cd5fa0c232))

# [1.2.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.1.4...v1.2.0) (2025-11-19)


### Features

* bump for tag test ([ddb95d7](https://github.com/nathforge/kodi-burn-after-watching/commit/ddb95d7c7da71ddc13dd301996db78e84229a061))

## [1.1.4](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.1.3...v1.1.4) (2025-11-19)


### Bug Fixes

* remove sha tag to avoid invalid tag names ([384835b](https://github.com/nathforge/kodi-burn-after-watching/commit/384835b84115b344519caec883158af6baf202f3))

## [1.1.3](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.1.2...v1.1.3) (2025-11-19)


### Bug Fixes

* restrict sha tag to branch events only ([4430910](https://github.com/nathforge/kodi-burn-after-watching/commit/4430910323e45fe48b3e5d20687bf029524d4ab7))

## [1.1.2](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.1.1...v1.1.2) (2025-11-19)


### Bug Fixes

* properly condition semver and sha tags on ref type ([40f74b8](https://github.com/nathforge/kodi-burn-after-watching/commit/40f74b85463d2cc3a6e3bf4fdc04cb9cbfc3a565))

## [1.1.1](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.1.0...v1.1.1) (2025-11-19)


### Bug Fixes

* disable sha tag generation for non-branch events ([1ba54bf](https://github.com/nathforge/kodi-burn-after-watching/commit/1ba54bf1b7338137181d1ddd22493b830b525976))

# [1.1.0](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.0.2...v1.1.0) (2025-11-19)


### Features

* trigger workflow on version tags ([8138de5](https://github.com/nathforge/kodi-burn-after-watching/commit/8138de5bbe61ebafb240797ed498da048349446d))

## [1.0.2](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.0.1...v1.0.2) (2025-11-19)


### Bug Fixes

* fetch tags after semantic-release for proper docker metadata ([38a7117](https://github.com/nathforge/kodi-burn-after-watching/commit/38a71175515045e8a64c32631091c733b83583c7))

## [1.0.1](https://github.com/nathforge/kodi-burn-after-watching/compare/v1.0.0...v1.0.1) (2025-11-19)


### Bug Fixes

* extract docker tags from git context for semantic versions ([a27f897](https://github.com/nathforge/kodi-burn-after-watching/commit/a27f8979ab605cbaea5e29257874dbd91a4f19ff))

# 1.0.0 (2025-11-19)


### Bug Fixes

* add write permission for semantic-release to push tags ([414fe67](https://github.com/nathforge/kodi-burn-after-watching/commit/414fe673ef970c04eb5c6c9f911283ed31836436))
* install dependencies before semantic-release ([8038369](https://github.com/nathforge/kodi-burn-after-watching/commit/8038369cb8b935774666a64c1918708ba8401a9b))
