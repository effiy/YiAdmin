<template>
  <div class="page-content">
    <main class="p-6">
      <div class="grid xl:grid-cols-3 gap-6">
        <div class="xl:col-span-2">
          <div class="card mb-6">
            <div class="p-6">
              <div class="flex items-center gap-5 mb-5">
                <div>
                  <img src="@/assets/images/users/user-2.jpg" alt="" class="h-14 rounded-full" />
                </div>
                <div>
                  <h5 class="text-lg text-gray-700 font-semibold mb-1">Tmac</h5>
                  <span class="inline-flex items-center px-1 rounded text-xs font-medium bg-danger text-white">Urgent</span>
                </div>
              </div>

              <h4 class="text-lg font-semibold mb-3">Code HTML email template for welcome email</h4>

              <p class="text-gray-400">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint cupiditate non sunt in culpa qui officia deserunt animi est
                laborum et
              </p>
              <p class="text-gray-400 mt-5">
                Consectetur adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni
                similique Tempore quos delectus asperiores libero voluptas quod perferendis erum ipsum dolor sit.
              </p>

              <div class="my-7">
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="col-span-1">
                    <h5 class="text-base mb-2">Start Date</h5>
                    <p class="text-secondary">22 March 2016 <small class="text-gray-400">1:00 PM</small></p>
                  </div>
                  <!-- col-end -->

                  <div class="col-span-1">
                    <h5 class="text-base mb-2">Due Date</h5>
                    <p class="text-secondary">17 April 2016 <small class="text-gray-400">12:00 PM</small></p>
                  </div>
                  <!-- col-end -->
                </div>
                <!-- grid-end -->
              </div>

              <div class="mt-3">
                <h5 class="text-base">Assign to</h5>
                <div class="flex items-center gap-3 mt-3">
                  <a href="#"> <img alt="64x64" src="@/assets/images/users/user-2.jpg" class="h-10 rounded-full" /> </a>
                  <a href="#"> <img alt="64x64" src="@/assets/images/users/user-3.jpg" class="h-10 rounded-full" /> </a>
                  <a href="#"> <img alt="64x64" src="@/assets/images/users/user-5.jpg" class="h-10 rounded-full" /> </a>
                  <a href="#"> <img alt="64x64" src="@/assets/images/users/user-8.jpg" class="h-10 rounded-full" /> </a>
                  <a href="#" class="bg-gray-400/40 w-7 h-7 rounded-full flex items-center justify-center dark:bg-gray-700/50">
                  </a>
                </div>
              </div>

              <div class="mt-5">
                <h5 class="text-base">Attached Files</h5>
                <div class="flex items-center gap-4 mt-3">
                  <div>
                    <img
                      src="@/assets/images/attached-files/img-1.jpg"
                      class="rounded border-4 dark:border-gray-700"
                      alt="attached-img"
                      width="80"
                    />
                    <p class="mt-1"><small>File one</small></p>
                  </div>
                  <div>
                    <img
                      src="@/assets/images/attached-files/img-2.jpg"
                      class="rounded border-4 dark:border-gray-700"
                      alt="attached-img"
                      width="80"
                    />
                    <p class="mt-1"><small>Attached-2</small></p>
                  </div>
                  <div>
                    <img
                      src="@/assets/images/attached-files/img-3.jpg"
                      class="rounded border-4 dark:border-gray-700"
                      alt="attached-img"
                      width="80"
                    />
                    <p class="mt-1"><small>shot</small></p>
                  </div>

                  <i class="mdi mdi-plus text-base"></i>
                </div>

                <div class="flex gap-3 justify-end mt-3">
                  <button type="submit" class="btn bg-success/90 rounded text-white hover:bg-success transition-all py-2">
                    Save
                  </button>
                  <button type="submit" class="btn bg-light rounded hover:bg-light/80 transition-all py-2 dark:bg-gray-700/50">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- card-end -->
        </div>
        <!-- col-end -->

        <div class="xl:col-span-1">
          <div class="card">
            <div class="p-6">
              <div class="flex items-center gap-5 mb-5">
                <h4 class="text-base">Comments (6)</h4>
                <div class="flex-grow text-end">
                  <div>
                    <button
                      data-fc-target="dropdown-target2"
                      data-fc-type="dropdown"
                      type="button"
                      data-fc-placement="bottom-end"
                    >
                      <i class="mdi mdi-dots-vertical text-xl"></i>
                    </button>

                    <div
                      id="dropdown-target2"
                      class="hidden bg-white shadow rounded border dark:border-slate-700 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all duration-300 py-2 dark:bg-gray-800"
                    >
                      <a
                        class="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-stone-100 dark:hover:bg-slate-700 dark:hover:text-gray-200"
                        href="javascript:void(0)"
                      >
                        Action
                      </a>
                      <a
                        class="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="javascript:void(0)"
                      >
                        Another action
                      </a>
                      <a
                        class="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="javascript:void(0)"
                      >
                        Something else
                      </a>
                      <a
                        class="flex items-center py-1.5 px-5 text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="javascript:void(0)"
                      >
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-7">
                <div class="mt-5">
                  <div class="flex gap-3">
                    <img src="@/assets/images/users/user-1.jpg" alt="" class="h-8 rounded-full" />
                    <div class="w-full">
                      <h5 class="text-base mb-2">Mat Helme</h5>
                      <p class="text-gray-400">
                        <a href="" class="text-primary">@Michael</a>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                      </p>
                      <a href="javascript: void(0);" class="block text-success">Reply</a>
                    </div>
                  </div>
                </div>
                <!-- chat-end -->

                <div class="flex gap-3 mt-5">
                  <img src="@/assets/images/users/user-2.jpg" alt="" class="h-8 rounded-full" />
                  <div class="w-full">
                    <h5 class="text-base mb-2">Media heading</h5>
                    <p class="text-gray-400">
                      <a href="" class="text-primary">@Michael</a>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                    </p>
                    <a href="javascript: void(0);" class="block text-success">Reply</a>
                    <!-- chat-end -->

                    <div class="mt-5">
                      <div class="flex gap-3">
                        <img src="@/assets/images/users/user-3.jpg" alt="" class="h-8 rounded-full" />
                        <div class="w-full">
                          <h5 class="text-base mb-2">Nested media heading</h5>
                          <p class="text-gray-400">
                            <a href="" class="text-primary">@Michael</a>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                          </p>
                          <a href="javascript: void(0);" class="block text-success">Reply</a>
                        </div>
                      </div>
                    </div>
                    <!-- chat-end -->
                  </div>
                </div>

                <div class="mt-5">
                  <div class="flex gap-3">
                    <img src="@/assets/images/users/user-1.jpg" alt="" class="h-8 rounded-full" />
                    <div class="w-full">
                      <h5 class="text-base mb-2">Mat Helme</h5>
                      <p class="text-gray-400">
                        <a href="" class="text-primary">@Michael</a>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                      </p>
                      <a href="javascript: void(0);" class="block text-success">Reply</a>
                    </div>
                  </div>
                </div>
                <!-- chat-end -->

                <div class="mt-5">
                  <div class="flex gap-3">
                    <img src="@/assets/images/users/user-1.jpg" alt="" class="h-8 rounded-full" />
                    <div class="w-full">
                      <h5 class="text-base mb-2">Mat Helme</h5>
                      <p class="text-gray-400">
                        <a href="" class="text-primary">@Michael</a>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                      </p>
                      <a href="javascript: void(0);" class="block text-success">Reply</a>
                    </div>
                  </div>
                </div>
                <!-- chat-end -->

                <div class="mt-5">
                  <div class="flex items-center gap-3">
                    <img src="@/assets/images/users/user-1.jpg" alt="" class="h-8 rounded-full" />
                    <div class="flex-grow">
                      <input
                        type="text"
                        class="w-full rounded focus:ring-0 border-gray-300 dark:border-gray-700 dark:bg-gray-700/50 text-sm dark:placeholder:text-gray-400"
                        placeholder="Some text value..."
                      />
                    </div>
                  </div>
                </div>
                <!-- chat-end -->
              </div>
            </div>
          </div>
          <!-- card-end -->
        </div>
        <!-- col-end -->
      </div>
      <!-- grid-end -->
    </main>
  </div>
</template>
