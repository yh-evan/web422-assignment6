import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { AlbumComponent } from './album/album.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'newReleases', component: NewReleasesComponent },
  { path: 'artist/:id', component: ArtistDiscographyComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'search', component: SearchResultComponent },
  { path: '', redirectTo: 'newReleases', pathMatch: 'full' },
  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
