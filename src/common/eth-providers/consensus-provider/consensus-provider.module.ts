import { Module } from '@nestjs/common';

import { BlockCacheModule } from './block-cache';
import { ConsensusProviderService } from './consensus-provider.service';
import { BlockCacheService } from './block-cache.service';

@Module({
  imports: [BlockCacheModule],
  providers: [ConsensusProviderService],
  exports: [ConsensusProviderService],
})
export class ConsensusProviderModule {}
