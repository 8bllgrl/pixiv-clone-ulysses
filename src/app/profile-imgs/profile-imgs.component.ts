import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-imgs',
  templateUrl: './profile-imgs.component.html',
  styleUrls: ['./profile-imgs.component.scss']
})
export class ProfileImgsComponent {

  images = [
    {
      url: 'https://cdn.midjourney.com/b357f206-e126-43d8-9f26-5b95f738ee8e/0_1.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/8d3b610c-7f7d-4677-a2c1-8b68e8a10cd0/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/90b59e7f-72cc-4b69-91ed-b77cc5970849/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/28efb4b5-b371-45ed-ba74-c87583936ea1/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/da543456-04ac-41c8-be5a-c1aecba7b502/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/f5505398-3e53-4de3-9424-03ad3c532d00/0_0.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/510e1958-c471-45dd-9faa-a16ee27e20e0/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/5db2d3ee-341c-4726-b686-a3ff5b778798/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/e8852b56-6678-4545-b090-2ea1995f0317/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/74a387fb-25e8-47e1-aa57-d58f90bfa45a/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/61954a81-1d3a-4760-a0a2-edd47dafcf8e/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/c37f9468-fe5f-495f-9039-0cc59968e108/0_0.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/6fedd96d-1ae9-4604-b3a1-2ab52585b02a/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/74e83241-8efd-4c42-a14d-f6fc34333ed9/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/ef5754e4-5d3a-4145-b609-fc305bc9ceda/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/ae768d35-e3d9-4951-aedc-5dc1d7bdcfb5/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/ebb4a3f2-ee7e-4bf6-96f1-757027b3218c/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/f3214922-c804-44b6-9c19-e10d7eeb8ea7/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/8a6adf51-c776-4ccc-b017-d2a9365281f1/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/0eeecb9b-1912-4df7-860d-6f2dd472d7b9/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/81964039-6821-4578-a770-699de07778ce/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/98b3c12c-c1fc-4b55-9d51-8ef5f8cd280f/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/587bbc89-567b-4b0e-9d8c-c0cd31e1f82a/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/42b6dc40-fbe4-4ae5-877a-03e8f7c33eeb/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/d9940e6e-95ff-4cef-b271-dc138b5b2b99/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/a9d52421-0153-493a-a7f1-b3da9a22825c/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/81d1318c-c816-43ba-9f97-d8df424dd63f/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/3bedbaf1-1ab8-473d-930e-a927452f59a5/0_2.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/3bedbaf1-1ab8-473d-930e-a927452f59a5/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/0bd40dfe-3948-41b0-bbac-9e557c9fbb10/0_1.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/ec7e40b4-bc3e-41ce-b9d0-5643fc338f12/0_0.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/2cdce037-7d47-41ed-a990-f5f28acc1f3f/0_3.png',
      title: 'Image'
    }, {
      url: 'https://cdn.midjourney.com/541abdc4-509a-40cf-bb0f-6abe453ff12d/0_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/bd38b575-e49c-458a-b514-e89648c239a9/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/41fd2ca9-d815-4a49-b9da-220ca3c43cbf/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/8f99a608-c082-41fa-8381-64f437632295/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/e7bf850b-4465-42ae-b669-c697ab2c34c7/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/d8d4b7f9-8392-402a-9f65-2b2f76562658/0_2.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/52b77a0e-57f9-458c-aa91-85d5a50bceac/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/74fb8ead-78b3-43ef-aa8b-a25c4a550cfa/0_1.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/4d794560-94d0-4f62-a3fb-176f2dcf457c/grid_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/63a0f850-928c-4798-ae1a-21c03409c1cc/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/5a6778c9-52e5-4326-8f31-03fbf51901b3/0_1.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/f76dcce4-1ec6-4e03-9bb5-7852f91402dd/0_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/f76dcce4-1ec6-4e03-9bb5-7852f91402dd/0_2.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/f76dcce4-1ec6-4e03-9bb5-7852f91402dd/0_2.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/3a7f64b0-5247-4855-ad5b-f4872963fe7c/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/69575b7a-a2e9-4fd3-97b3-ff2099204b69/0_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/8175a6c7-921d-4912-8f0c-d0625d3112a5/0_2.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/7cc98b04-e785-4285-8b5c-a422afbc1e16/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/05d5f121-1a90-4b00-9e2f-e56c9a3912b6/0_1.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/b5750795-0b9c-40b2-90f4-a6c7f5ca7617/0_3.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/abdaa228-6e58-493d-89f5-b87ca9afbdcf/0_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/129ab4fd-1370-48bd-a024-6a34c672f480/0_2.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/129ab4fd-1370-48bd-a024-6a34c672f480/0_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/2ee1829a-003f-40e7-9904-429544688ce1/grid_0.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/a9677da3-715a-4303-b836-3bbc1d630aca/0_1.png',
      title: 'Image'
    },
    {
      url: 'https://cdn.midjourney.com/7b078aaa-2273-477e-99a8-ca778898c8a1/0_1.png',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },
    {
      url: 'https://via.placeholder.com/350x150',
      title: 'Image'
    },




    // Add more images here
  ];

}
