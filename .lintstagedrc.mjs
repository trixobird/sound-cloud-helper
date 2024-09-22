import {
  mdStagedConfig,
  prismaStagedConfig,
  reactLintStagedConfig,
  terraformStagedConfig,
} from '@repo/lintstaged-config';

export default {
  ...reactLintStagedConfig,
  ...prismaStagedConfig,
  ...terraformStagedConfig,
  ...mdStagedConfig,
};
